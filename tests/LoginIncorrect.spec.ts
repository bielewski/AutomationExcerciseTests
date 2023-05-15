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

test('trying to login - failed', async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    const { EMAIL, PASSWORD} = process.env;

    // filling the form
    await signUpLoginPage.loginMailSetter();
    await page.keyboard.type(EMAIL!);
    await signUpLoginPage.loginPwdSetter();
    await page.keyboard.type(PASSWORD!);
    await signUpLoginPage.LoginBtn.click();
    
    // asserting login failure
    await expect(signUpLoginPage.LoginFailedConfirmation).toBeVisible();
});