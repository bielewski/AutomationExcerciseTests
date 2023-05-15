import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly HomeLink: Locator;
    readonly ProductsLink: Locator;
    readonly CartLink: Locator;
    readonly SignUpLoginLink: Locator;
    readonly ContactUsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.HomeLink = page.getByRole('link', { name: ' Home' });
        this.ProductsLink = page.getByRole('link', { name: ' Products' });
        this.CartLink = page.getByRole('link', { name: ' Cart' });
        this.SignUpLoginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.ContactUsLink = page.getByRole('link', { name: ' Contact us' });
    }

    async goTo() {
        await this.page.goto('/');
    }

    async homeNav() {
        await this.HomeLink.click();
    }

    async productsNav() {
        await this.ProductsLink.click();
    }

    async cartNav() {
        await this.CartLink.click();
    }

    async signUpNav() {
        await this.SignUpLoginLink.click();
    }

    async contactUsNav() {
        await this.ContactUsLink.click();
    }
}