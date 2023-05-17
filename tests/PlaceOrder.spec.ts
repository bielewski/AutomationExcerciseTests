import { test, expect } from '@playwright/test';
import { SignUpLoginPage } from '../pages/SignUpLoginPage';
import { ProductListPage } from '../pages/ProductListPage';
import { Cart } from '../pages/Cart';

test.beforeEach(async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    await signUpLoginPage.goTo();
});

test('login, add to cart and place order', async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    const { CORRECT_EMAIL, CORRECT_PASSWORD, NAME, CARD_NUMBER, CVV, EXP_MONTH, EXP_YEAR } = process.env;
    const productListPage = new ProductListPage(page);
    const cartPage = new Cart(page);
    
    // filling the fields
    await signUpLoginPage.loginMailSetter();
    await page.keyboard.type(CORRECT_EMAIL!);
    await signUpLoginPage.loginPwdSetter();
    await page.keyboard.type(CORRECT_PASSWORD!);
    await signUpLoginPage.LoginBtn.click();

    // asserting login success
    await expect(signUpLoginPage.LoginConfirmation).toBeVisible();

    // adding to cart first item and visiting the cart
    await productListPage.goTo();
    await productListPage.addToCart();
    await productListPage.ViewCart.click();

    // asserting cart page
    await expect(cartPage.EmptyCart).toBeHidden();

    // placing order
    await cartPage.checkoutNav();
    await cartPage.placeOrder();
    await cartPage.nameOnCardSetter(NAME!);
    await cartPage.cardNumberSetter(CARD_NUMBER!);
    await cartPage.cvvSetter(CVV!);
    await cartPage.expMonthSetter(EXP_MONTH!);
    await cartPage.expYearSetter(EXP_YEAR!);
    await cartPage.payOrder();
    await expect(cartPage.OrderPlaced).toBeVisible();
});

