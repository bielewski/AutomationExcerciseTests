import { test, expect } from '@playwright/test';
import { SignUpLoginPage } from '../pages/SignUpLoginPage';

test.beforeEach(async ({ page }) => {
    const SLPage = new SignUpLoginPage(page);
    await SLPage.goTo();
});

test('asserting visibility of the Sign Up / Login page', async ({ page }) => {
    const SLPage = new SignUpLoginPage(page);
    await expect(SLPage.LoginHeader).toBeVisible();
    await expect(SLPage.SignUpHeader).toBeVisible();
});

test('trying to login', async ({ page }) => {
    const SLPage = new SignUpLoginPage(page);
    const { CORRECT_EMAIL, CORRECT_PASSWORD} = process.env;
    await SLPage.loginMailSetter();
    await page.keyboard.type(CORRECT_EMAIL!);
    await SLPage.loginPwdSetter();
    await page.keyboard.type(CORRECT_PASSWORD!);
    await SLPage.LoginBtn.click();
    await expect(SLPage.LoginConfirmation).toBeVisible();
});