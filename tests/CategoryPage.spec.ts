import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';

test('asserting visibility of category', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    await productListPage.goTo();

    // category is visible
    await expect(productListPage.CatHeader).toBeVisible();

    // going to woman dress category
    await page.goto('/category_products/1');
    await expect(productListPage.WomanFirstSubcatHeader).toBeVisible();

    // going to man tshirt category
    await productListPage.goToManFirstSubcat();

    // dealing with annoying ad
    await page.goto('/category_products/3');

    // category is visible
    await expect(productListPage.ManFirstSubcatHeader).toBeVisible();

});