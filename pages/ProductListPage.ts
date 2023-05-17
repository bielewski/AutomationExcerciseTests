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
    readonly AddToCartSecond: Locator;
    readonly ContinueShopping: Locator;
    readonly ViewCart: Locator;
    readonly Search: Locator;
    readonly SearchHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.CatHeader = page.getByRole('heading', { name: 'Category' });
        this.AllProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.BrandHeader = page.getByRole('heading', { name: 'Brands' });
        this.ChooseFirstProduct = page.locator('.choose > .nav > li > a').first();
        this.AddToCart = page.locator('div:nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn');
        this.GoToCart = page.getByRole('link', { name: 'View Cart' });
        this.StayHere = page.getByRole('button', { name: 'Continue Shopping' });
        this.AddToCartSecond = page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn');
        this.ContinueShopping = page.getByRole('button', { name: 'Continue Shopping' });
        this.ViewCart = page.getByRole('link', { name: 'View Cart' });
        this.Search = page.getByPlaceholder('Search Product');
        this.SearchHeader = page.getByRole('heading', { name: 'Searched Products' });
    }

    async goTo() {
        await this.page.goto('/products');
    }

    async chooseFirstProduct() {
        await this.ChooseFirstProduct.click();
    }

    async addToCart() {
        await this.AddToCart.first().click();
    }

    async goToCart() {
        await this.GoToCart.click();
    }

    async stayHere() {
        await this.StayHere.click();
    }

    async addToCartSecond() {
        await this.AddToCartSecond.click();
    }

    async searchFor(searchTerm: string) {
        await this.Search.fill(searchTerm);
        await this.page.getByRole('button', { name: '' }).click();
        await expect(this.page.getByText(searchTerm).nth(1)).toBeVisible();
    }
}