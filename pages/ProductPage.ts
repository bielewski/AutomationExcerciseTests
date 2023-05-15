import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly CatHeader: Locator;
    readonly ProductHeader: Locator;
    readonly BrandHeader: Locator;
    readonly ProductCategoryHeader: Locator;
    readonly ProductImg: Locator;
    readonly AddToCart: Locator;
    readonly RevHeader: Locator;
    readonly NamePlaceholder: Locator;
    readonly MailPlaceholder: Locator;
    readonly RevPlaceholder: Locator;
    readonly SubmitRevBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.CatHeader = page.getByRole('heading', { name: 'Category' });
        this.ProductHeader = page.getByRole('heading', { name: 'Blue Top' });
        this.BrandHeader = page.getByRole('heading', { name: 'Brands' });
        this.ProductCategoryHeader = page.getByText('Category: Women > Tops');
        this.ProductImg = page.getByRole('img', { name: 'ecommerce website products' }).first();
        this.AddToCart = page.getByRole('button', { name: ' Add to cart' });
        this.RevHeader = page.getByRole('link', { name: 'Write Your Review' });
        this.NamePlaceholder = page.getByPlaceholder('Your Name');
        this.MailPlaceholder = page.getByPlaceholder('Email Address', { exact: true });
        this.RevPlaceholder = page.getByPlaceholder('Add Review Here!');
        this.SubmitRevBtn = page.getByRole('button', { name: 'Submit' });
    }

    async goTo() {
        await this.page.goto('/product_details/1');
    }

    async nameSetter() {
        await this.NamePlaceholder.click();
    }

    async addToCart() {
        await this.AddToCart.click();
    }

    async mailSetter() {
        await this.MailPlaceholder.click();
    }

    async revSetter() {
        await this.RevPlaceholder.click();
    }

    async submitRevBtnClick() {
        await this.SubmitRevBtn.click();
    }
}