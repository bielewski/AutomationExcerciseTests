import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductPage } from '../pages/ProductPage';

// opt out of beforeEach because of annoying ad

test('asserting visibility of the products list ', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    await productListPage.goTo();

    // asserting visibility of the products list
    await expect(productListPage.CatHeader).toBeVisible();
    await expect(productListPage.BrandHeader).toBeVisible();
    await expect(productListPage.AllProductsHeader).toBeVisible();

});

test('asserting product page', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goTo();

    // asserting visibility of the product page
    await expect(productPage.ItemName).toBeVisible();
    await expect(productPage.ItemPrice).toBeVisible();
    await expect(productPage.ItemAvailability).toBeVisible();
    await expect(productPage.ItemCondition).toBeVisible();
    await expect(productPage.ItemBrand).toBeVisible();
    await expect(productPage.ProductCategory).toBeVisible();
    await expect(productPage.ProductImg).toBeVisible();
});