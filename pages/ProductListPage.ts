import { expect, Locator, Page } from '@playwright/test';

export class ProductListPage {
    readonly page: Page;
    readonly CatHeader: Locator;
    readonly AllProductsHeader: Locator;
    readonly BrandHeader: Locator;
    readonly ChooseFirstProduct: Locator;
    readonly AddToCart: Locator;
    readonly GoToCart: Locator;
    readonly StayHere: Locator;

    constructor(page: Page) {
        this.page = page;
        this.CatHeader = page.getByRole('heading', { name: 'Category' });
        this.AllProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.BrandHeader = page.getByRole('heading', { name: 'Brands' });
        this.ChooseFirstProduct = page.locator('.choose > .nav > li > a').first();
        this.AddToCart = page.locator('.overlay-content > .btn').first();
        this.GoToCart = page.getByRole('link', { name: 'View Cart' });
        this.StayHere = page.getByRole('button', { name: 'Continue Shopping' });
    }

    async goTo() {
        await this.page.goto('/products');
    }

    async chooseFirstProduct() {
        await this.ChooseFirstProduct.click();
    }

    async addToCart() {
        await this.AddToCart.click();
    }

    async goToCart() {
        await this.GoToCart.click();
    }

    async stayHere() {
        await this.StayHere.click();
    }
}