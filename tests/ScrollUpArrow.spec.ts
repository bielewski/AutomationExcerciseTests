import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('asserting visibility after arrow is used', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();

    // scroll down
    await page.evaluate(() => window.scrollTo(0, 800));

    // arrow is visible
    await expect(homePage.Arrow).toBeVisible();

    // dealing with annoying ad
    await page.locator('.grippy-host').click();

    // click on arrow
    await homePage.Arrow.click();

    // arrow is hidden
    await expect(homePage.Arrow).toBeHidden();
});