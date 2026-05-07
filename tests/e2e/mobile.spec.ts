import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 667 } });

test('mobile: header visible y tabla scrolleable', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /tabla peri[óo]dica 3d/i })).toBeVisible();
  await expect(page.getByRole('searchbox')).toBeVisible();
});

test('mobile: footer tomerivero.dev visible al final', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(page.getByRole('link', { name: 'tomerivero.dev' })).toBeVisible();
});
