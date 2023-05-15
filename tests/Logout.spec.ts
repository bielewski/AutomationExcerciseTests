import { test, expect } from '@playwright/test';
import { SignUpLoginPage } from '../pages/SignUpLoginPage';

test.beforeEach(async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    await signUpLoginPage.goTo();
});

test('asserting visibility of the Sign Up / Login page', async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    await expect(signUpLoginPage.LoginHeader).toBeVisible();
    await expect(signUpLoginPage.SignUpHeader).toBeVisible();
});

test('login then logout', async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    const { CORRECT_EMAIL, CORRECT_PASSWORD} = process.env;

    // filling the fields
    await signUpLoginPage.loginMailSetter();
    await page.keyboard.type(CORRECT_EMAIL!);
    await signUpLoginPage.loginPwdSetter();
    await page.keyboard.type(CORRECT_PASSWORD!);

    // login
    await signUpLoginPage.LoginBtn.click();

    // asserting login success
    await expect(signUpLoginPage.LoginConfirmation).toBeVisible();

    // logout
    await signUpLoginPage.LogoutBtn.click();

    // asserting logout success
    await expect(signUpLoginPage.LoginConfirmation).toBeHidden();
});