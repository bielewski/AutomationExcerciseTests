// Import test and expect from Playwright
import { test, expect } from '@playwright/test';

// Import ProductPage class
import { ProductPage } from '../pages/ProductPage';

// Before each test go to the product page
test.beforeEach(async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goTo();
});

test('asserting visibility of the product review section', async ({ page }) => {
    const productPage = new ProductPage(page);
    await expect(productPage.RevHeader).toHaveText('Write Your Review');
    await expect(productPage.NamePlaceholder).toBeVisible();
    await expect(productPage.MailPlaceholder).toBeVisible();
    await expect(productPage.RevPlaceholder).toBeVisible();
    await expect(productPage.SubmitRevBtn).toBeVisible();
});

test('adding review', async ({ page }) => {
    const productPage = new ProductPage(page);
    const { NAME, EMAIL, REVIEW } = process.env;

    // filling the fields
    await productPage.nameSetter();
    await page.keyboard.type(NAME!);
    await productPage.mailSetter();
    await page.keyboard.type(EMAIL!);
    await productPage.revSetter();
    await page.keyboard.type(REVIEW!);

    // submit review
    await productPage.submitRevBtnClick();

    // assert success message
    await expect(productPage.SuccessMsg).toBeVisible()
});