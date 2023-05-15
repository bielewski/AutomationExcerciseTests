import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('asserting visibility after arrow is used', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(homePage.Arrow).toBeVisible();
    // dealing with annoying ad
    await page.locator('.grippy-host').click();
    await page.locator('.grippy-host').click();
    //
    await homePage.Arrow.click();
    await expect(homePage.Arrow).toBeHidden();
});