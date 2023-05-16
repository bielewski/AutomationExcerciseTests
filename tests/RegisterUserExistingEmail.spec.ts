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

test('trying to register with existing mail', async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    const { NAME, EXISTING_EMAIL } = process.env;

    // filling the fields
    await signUpLoginPage.signUpNameSetter();
    await page.keyboard.type(NAME!);
    await signUpLoginPage.signUpMailSetter();
    await page.keyboard.type(EXISTING_EMAIL!);

    // submitting the form
    await signUpLoginPage.SignUpBtn.click();

    // asserting registration failure
    await expect(signUpLoginPage.ExistingEmailMessage).toBeVisible();
});