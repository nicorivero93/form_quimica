import { test, expect } from '@playwright/test';

test('click en oro abre modal con tabs', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /^Oro,/ }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Oro' })).toBeVisible();
  await expect(page.getByRole('tab', { name: /material f[íi]sico/i })).toBeVisible();
  await expect(page.getByRole('tab', { name: /estructuras 3d/i })).toBeVisible();
  await expect(page.getByRole('tab', { name: /datos/i })).toBeVisible();
});

test('búsqueda filtra elementos', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('searchbox').fill('Au');
  await expect(page.getByRole('button', { name: /^Oro,/ })).toBeVisible();
});

test('tab Datos muestra propiedades del oro', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /^Oro,/ }).click();
  await page.getByRole('tab', { name: /datos/i }).click();
  await expect(page.getByText('196.97', { exact: false })).toBeVisible();
  await expect(page.getByText('Configuración electrónica')).toBeVisible();
});
