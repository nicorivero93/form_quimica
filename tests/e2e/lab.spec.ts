import { test, expect } from '@playwright/test';

const ANIMATION_BUFFER_MS = 3500;

async function gotoLab(page: import('@playwright/test').Page) {
  await page.goto('/');
  await page.getByRole('link', { name: /laboratorio/i }).click();
  await expect(page.getByRole('heading', { name: 'Laboratorio' })).toBeVisible();
}

test.describe('Laboratorio', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.removeItem('tabla-atomos:lab:v1');
    });
  });

  test('link al laboratorio desde la home', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /laboratorio/i }).click();
    await expect(page).toHaveURL(/\/lab$/);
    await expect(page.getByRole('heading', { name: 'Laboratorio' })).toBeVisible();
  });

  test('descubrir agua en modo química', async ({ page }) => {
    await gotoLab(page);

    await page.getByRole('button', { name: 'Agregar H', exact: true }).click();
    await page.getByRole('button', { name: 'Agregar H', exact: true }).click();
    await page.getByRole('button', { name: 'Agregar O', exact: true }).click();
    await page.getByRole('button', { name: /^Fusionar$/ }).click();

    await page.waitForTimeout(ANIMATION_BUFFER_MS);

    await expect(page.getByText('H₂O', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('Agua', { exact: false }).first()).toBeVisible();
  });

  test('He + Ne no reacciona', async ({ page }) => {
    await gotoLab(page);
    await page.getByRole('button', { name: 'Agregar He' }).click();
    await page.getByRole('button', { name: 'Agregar Ne' }).click();
    await page.getByRole('button', { name: /^Fusionar$/ }).click();
    await expect(page.getByText('No reacciona')).toBeVisible();
  });

  test('descubrimiento de NaCl persiste en localStorage', async ({ page }) => {
    await gotoLab(page);
    await page.getByRole('button', { name: 'Agregar Na' }).click();
    await page.getByRole('button', { name: 'Agregar Cl' }).click();
    await page.getByRole('button', { name: /^Fusionar$/ }).click();
    await page.waitForTimeout(ANIMATION_BUFFER_MS);

    await expect(page.getByText('NaCl', { exact: false }).first()).toBeVisible();

    const stored = await page.evaluate(() =>
      JSON.parse(window.localStorage.getItem('tabla-atomos:lab:v1') ?? '{}'),
    );
    expect(typeof stored?.state?.discoveries?.nacl).toBe('number');
  });

  test('tab Romper muestra los compuestos reversibles', async ({ page }) => {
    await gotoLab(page);
    await page.getByRole('tab', { name: /Romper/ }).click();
    await expect(page.getByText('Elegí un compuesto para romperlo')).toBeVisible();
    await expect(page.getByRole('button', { name: /^H₂O/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /^NaCl/ })).toBeVisible();
  });
});
