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

test('asserting visibility of Sign Up page', async ({ page }) => {
    const SLPage = new SignUpLoginPage(page);
    const { NAME, EMAIL} = process.env;
    await SLPage.signUpNameSetter();
    await page.keyboard.type(NAME!);
    await SLPage.signUpMailSetter();
    await page.keyboard.type(EMAIL!);
    await SLPage.SignUpBtn.click();
    await expect(SLPage.SignUpFormHeader).toBeVisible();
});

test('User Registration', async ({ page }) => {
    const SLPage = new SignUpLoginPage(page);
    const { NAME, EMAIL, PASSWORD, LAST_NAME, COMPANY, ADDRESS, ADDRESS2, CITY, STATE, ZIP, MOBILE} = process.env;
    await SLPage.signUpNameSetter();
    await page.keyboard.type(NAME!);
    await SLPage.signUpMailSetter();
    await page.keyboard.type(EMAIL!);
    await SLPage.SignUpBtn.click();
    await SLPage.chooseFirstGender();
    await SLPage.pwdSetter();
    await page.keyboard.type(PASSWORD!);
    await SLPage.dayPicker();
    await SLPage.monthPicker();
    await SLPage.yearPicker();
    await SLPage.newsletterCheck();
    await SLPage.specialOffersCheck();
    await SLPage.firstNameSetter();
    await page.keyboard.type(NAME!);
    await SLPage.lastNameSetter();
    await page.keyboard.type(LAST_NAME!);
    await SLPage.companySetter();
    await page.keyboard.type(COMPANY!)
    await SLPage.addressSetter();
    await page.keyboard.type(ADDRESS!);
    await SLPage.address2Setter();
    await page.keyboard.type(ADDRESS2!);
    await SLPage.countryPicker();
    await SLPage.citySetter();
    await page.keyboard.type(CITY!);
    await SLPage.stateSetter();
    await page.keyboard.type(STATE!);
    await SLPage.zipCodeSetter();
    await page.keyboard.type(ZIP!);
    await SLPage.mobileNumberSetter();
    await page.keyboard.type(MOBILE!);
    await SLPage.submitBtn();
    await expect(SLPage.SuccessMessage).toBeVisible();
    // just in case of annoying ad
    await SLPage.goTo();
    await page.goto('https://automationexercise.com/delete_account');
    await expect(SLPage.DeleteMessage).toBeVisible();
});