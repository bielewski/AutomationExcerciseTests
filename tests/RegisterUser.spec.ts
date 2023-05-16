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

test('asserting visibility of Sign Up page', async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    const { NAME, EMAIL } = process.env;
    await signUpLoginPage.signUpNameSetter();
    await page.keyboard.type(NAME!);
    await signUpLoginPage.signUpMailSetter();
    await page.keyboard.type(EMAIL!);
    await signUpLoginPage.SignUpBtn.click();
    await expect(signUpLoginPage.SignUpFormHeader).toBeVisible();
});

test('User Registration', async ({ page }) => {
    const signUpLoginPage = new SignUpLoginPage(page);
    const { NAME, EMAIL, PASSWORD, LAST_NAME, COMPANY, ADDRESS, ADDRESS2, CITY, STATE, ZIP, MOBILE } = process.env;
    
    // filling the fields
    await signUpLoginPage.signUpNameSetter();
    await page.keyboard.type(NAME!);
    await signUpLoginPage.signUpMailSetter();
    await page.keyboard.type(EMAIL!);

    // submitting the form
    await signUpLoginPage.SignUpBtn.click();

    // filling the fields
    await signUpLoginPage.chooseFirstGender();
    await signUpLoginPage.pwdSetter();
    await page.keyboard.type(PASSWORD!);
    await signUpLoginPage.dayPicker();
    await signUpLoginPage.monthPicker();
    await signUpLoginPage.yearPicker();
    await signUpLoginPage.newsletterCheck();
    await signUpLoginPage.specialOffersCheck();
    await signUpLoginPage.firstNameSetter();
    await page.keyboard.type(NAME!);
    await signUpLoginPage.lastNameSetter();
    await page.keyboard.type(LAST_NAME!);
    await signUpLoginPage.companySetter();
    await page.keyboard.type(COMPANY!)
    await signUpLoginPage.addressSetter();
    await page.keyboard.type(ADDRESS!);
    await signUpLoginPage.address2Setter();
    await page.keyboard.type(ADDRESS2!);
    await signUpLoginPage.countryPicker();
    await signUpLoginPage.citySetter();
    await page.keyboard.type(CITY!);
    await signUpLoginPage.stateSetter();
    await page.keyboard.type(STATE!);
    await signUpLoginPage.zipCodeSetter();
    await page.keyboard.type(ZIP!);
    await signUpLoginPage.mobileNumberSetter();
    await page.keyboard.type(MOBILE!);

    // submitting the form
    await signUpLoginPage.submitBtn();

    // asserting registration success
    await expect(signUpLoginPage.SuccessMessage).toBeVisible();
    // annoying ad pops up, so I has to navigate directly to the delete account page
    await signUpLoginPage.goTo();
    await page.goto('https://automationexercise.com/delete_account');

    // asserting account deletion success
    await expect(signUpLoginPage.DeleteMessage).toBeVisible();
});