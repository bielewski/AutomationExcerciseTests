import { expect, Locator, Page } from '@playwright/test';

export class Cart {
    readonly page: Page;
    readonly EmptyCart: Locator;
    readonly ProductsLink: Locator;
    readonly CheckoutLink: Locator;
    readonly DeleteItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.EmptyCart = page.getByText("Cart is empty!");
        this.ProductsLink = page.getByRole("link", { name: "here" });
        this.CheckoutLink = page.getByText("Proceed To Checkout");
        this.DeleteItems = page.getByRole("cell", { name: "" });
    }

    async goTo() {
        await this.page.goto('/view_cart');
    }

    async productsNav() {
        await this.ProductsLink.click();
    }

    async checkoutNav() {
        await this.CheckoutLink.click();
    }

    async deleteItems() {
        await this.DeleteItems.click();
    }
}