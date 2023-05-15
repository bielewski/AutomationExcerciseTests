import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

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
    await productPage.nameSetter();
    await page.keyboard.type(NAME!);
    await productPage.mailSetter();
    await page.keyboard.type(EMAIL!);
    await productPage.revSetter();
    await page.keyboard.type(REVIEW!);
    await productPage.submitRevBtnClick();
    await expect(productPage.SuccessMsg).toBeVisible()
});