import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/ProductListPage';
import { Cart } from '../pages/Cart';

// opt out of beforeEach because of annoying ad

test('asserting visibility of the products list ', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    await productListPage.goTo();

    // asserting visibility of the products list
    await expect(productListPage.CatHeader).toBeVisible();
    await expect(productListPage.BrandHeader).toBeVisible();
    await expect(productListPage.AllProductsHeader).toBeVisible();

});

test('adding to cart first item and checking the cart after deleting', async ({ page }) => {
    const productListPage = new ProductListPage(page);
    await productListPage.goTo();

    // adding to cart first item and visiting the cart
    await productListPage.addToCart();
    await productListPage.ViewCart.click();


    // asserting cart page
    const cartPage = new Cart(page);
    await expect(cartPage.EmptyCart).toBeHidden();
    await expect(cartPage.FirstItem).toBeVisible();
    await expect(cartPage.CheckoutLink).toBeVisible();

    // removing from cart
    await cartPage.deleteItem();

    // asserting cart page
    await expect(cartPage.EmptyCart).toBeVisible();
});