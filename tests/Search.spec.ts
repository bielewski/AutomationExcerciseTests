import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';

// opt out of beforeEach because of annoying ad

test('asserting visibility of the products list ', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    await productListPage.goTo();

    // asserting visibility of the products list
    await expect(productListPage.CatHeader).toBeVisible();
    await expect(productListPage.BrandHeader).toBeVisible();
    await expect(productListPage.AllProductsHeader).toBeVisible();

});

test('searching for "Blue Top" and assert the search page', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    await productListPage.goTo();

    // search for "Blue Top"
    await productListPage.searchFor("Blue Top");
});