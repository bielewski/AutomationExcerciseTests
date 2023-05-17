import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';

test('asserting visibility of category', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    await productListPage.goTo();

    // category is visible
    await expect(productListPage.BrandHeader).toBeVisible();

    // going to first brand listing
    await productListPage.goToFirstBrand();

    // dealing with annoying ad
    await page.goto('/brand_products/Polo');

    // category is visible
    await expect(productListPage.FirstBrandHeader).toBeVisible();

});