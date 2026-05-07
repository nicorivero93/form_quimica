import { test, expect } from '@playwright/test';

test('la app carga y muestra el header', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /tabla peri[óo]dica 3d/i })).toBeVisible();
});

test('renderiza los 118 elementos como botones', async ({ page }) => {
  await page.goto('/');
  const buttons = page.getByRole('button', { name: /n[úu]mero at[óo]mico/i });
  await expect(buttons).toHaveCount(118);
});

test('footer con tomerivero.dev', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'tomerivero.dev' })).toBeVisible();
});
