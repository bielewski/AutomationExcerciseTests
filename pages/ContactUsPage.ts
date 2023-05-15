import { expect, Locator, Page } from '@playwright/test';

export class ContactUsPage {
    readonly page: Page;
    readonly Header: Locator;
    readonly Note: Locator;
    readonly SectionHeader: Locator;
    readonly NamePlaceholder: Locator;
    readonly MailPlaceholder: Locator;
    readonly SubjectPlaceholder: Locator;
    readonly MsgPlaceholder: Locator;
    readonly SendBtn: Locator;
    readonly SuccessMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Header = page.getByRole('heading', { name: 'Contact Us' });
        this.Note = page.getByText('Note: Below contact form is for testing purpose.');
        this.SectionHeader = page.getByRole('heading', { name: 'Get In Touch' });
        this.NamePlaceholder = page.getByPlaceholder('Name');
        this.MailPlaceholder = page.getByPlaceholder('Email', { exact: true });
        this.SubjectPlaceholder = page.getByPlaceholder('Subject');
        this.MsgPlaceholder = page.getByPlaceholder('Your Message Here');
        this.SendBtn = page.getByRole('button', { name: 'Submit' });
        this.SuccessMsg = page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.');
    }

    async goTo() {
        await this.page.goto('/contact_us');
    }

    async nameSetter() {
        await this.NamePlaceholder.click();
    }

    async mailSetter() {
        await this.MailPlaceholder.click();
    }

    async subjectSetter() {
        await this.SubjectPlaceholder.click();
    }

    async msgSetter() {
        await this.MsgPlaceholder.click();
    }

    async sendBtnClick() {
        await this.SendBtn.click();
    }
}