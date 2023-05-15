import { expect, Locator, Page } from '@playwright/test';

export class SignUpLoginPage {
    readonly page: Page;
    readonly LoginHeader: Locator;
    readonly SignUpHeader: Locator;
    readonly LoginBtn: Locator;
    readonly SignUpBtn: Locator;
    readonly LoginMailPlaceholder: Locator;
    readonly LoginPwdPlaceholder: Locator;
    readonly SignUpNamePlaceholder: Locator;
    readonly SignUpMailPlaceholder: Locator;
    readonly SignUpFormHeader: Locator;
    readonly ChooseFirstGender: Locator;
    readonly PwdPlaceholder: Locator;
    readonly DayPicker: Locator;
    readonly MonthPicker: Locator;
    readonly YearPicker: Locator;
    readonly NewsLetter: Locator;
    readonly SpecialOffers: Locator;
    readonly FirstNamePlaceholder: Locator;
    readonly LastNamePlaceholder: Locator;
    readonly CompanyPlaceholder: Locator;
    readonly AddressPlaceholder: Locator;
    readonly Address2Placeholder: Locator;
    readonly CountryPicker: Locator;
    readonly StatePlaceholder: Locator;
    readonly CityPlaceholder: Locator;
    readonly ZipCodePlaceholder: Locator;
    readonly MobileNumberPlaceholder: Locator;
    readonly SubmitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.LoginHeader = page.getByRole('heading', { name: 'Login to your account' });
        this.SignUpHeader = page.getByRole('heading', { name: 'New User Signup!' });
        this.LoginBtn = page.getByRole('button', { name: 'Login' });
        this.SignUpBtn = page.getByRole('button', { name: 'Signup' });
        this.LoginMailPlaceholder = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.LoginPwdPlaceholder = page.getByPlaceholder('Password');
        this.SignUpNamePlaceholder = page.getByPlaceholder('Name');
        this.SignUpMailPlaceholder = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.SignUpFormHeader = page.getByRole('heading', { name: 'Enter Account Information' });
        this.ChooseFirstGender = page.getByRole('radio', { name: 'Mr.' });
        this.PwdPlaceholder = page.getByPlaceholder('Password *');
        this.DayPicker = page.locator('#days');
        this.MonthPicker = page.locator('#months');
        this.YearPicker = page.locator('#years');
        this.NewsLetter = page.getByLabel('Sign up for our newsletter!');
        this.SpecialOffers = page.getByLabel('Receive special offers from our partners!');
        this.FirstNamePlaceholder = page.getByLabel('First name *');
        this.LastNamePlaceholder = page.getByLabel('Last name *');
        this.CompanyPlaceholder = page.getByLabel('Company', { exact: true });
        this.AddressPlaceholder = page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)');
        this.Address2Placeholder = page.getByLabel('Address 2');
        this.CountryPicker = page.getByRole('combobox', { name: 'Country *' });
        this.StatePlaceholder = page.getByLabel('State *');
        this.CityPlaceholder = page.getByLabel('City *');
        this.ZipCodePlaceholder = page.locator('#zipcode');
        this.MobileNumberPlaceholder = page.getByLabel('Mobile Number *');
        this.SubmitBtn = page.getByRole('button', { name: 'Create Account' });
    }

    async goTo() {
        await this.page.goto('/signup');
    }

    async loginMailSetter() {
        await this.LoginMailPlaceholder.click();
    }

    async loginPwdSetter() {
        await this.LoginPwdPlaceholder.click();
    }

    async signUpNameSetter() {
        await this.SignUpNamePlaceholder.click();
    }

    async signUpMailSetter() {
        await this.SignUpMailPlaceholder.click();
    }

    async chooseFirstGender() {
        await this.ChooseFirstGender.click();
    }

    async pwdSetter() {
        await this.PwdPlaceholder.click();
    }

    async dayPicker() {
        await this.DayPicker.selectOption('1');
    }

    async monthPicker() {
        await this.MonthPicker.selectOption('1');
    }

    async yearPicker() {
        await this.YearPicker.selectOption('2021');
    }

    async newsletterCheck() {
        await this.NewsLetter.click();
    }

    async specialOffersCheck() {
        await this.SpecialOffers.click();
    }

    async firstNameSetter() {
        await this.FirstNamePlaceholder.click();
    }

    async lastNameSetter() {
        await this.LastNamePlaceholder.click();
    }

    async companySetter() {
        await this.CompanyPlaceholder.click();
    }

    async addressSetter() {
        await this.AddressPlaceholder.click();
    }

    async address2Setter() {
        await this.Address2Placeholder.click();
    }

    async countryPicker() {
        await this.CountryPicker.selectOption('United States');
    }

    async stateSetter() {
        await this.StatePlaceholder.click();
    }

    async citySetter() {
        await this.CityPlaceholder.click();
    }

    async zipCodeSetter() {
        await this.ZipCodePlaceholder.click();
    }

    async mobileNumberSetter() {
        await this.MobileNumberPlaceholder.click();
    }

    async submitBtn() {
        await this.SubmitBtn.click();
    }

}