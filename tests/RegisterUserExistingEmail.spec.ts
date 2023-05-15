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

test('trying to register with existing mail', async ({ page }) => {
    const SLPage = new SignUpLoginPage(page);
    const { NAME, EXISTING_EMAIL} = process.env;
    await SLPage.signUpNameSetter();
    await page.keyboard.type(NAME!);
    await SLPage.signUpMailSetter();
    await page.keyboard.type(EXISTING_EMAIL!);
    await SLPage.SignUpBtn.click();
    await expect(SLPage.ExistingEmailMessage).toBeVisible();
});