import { expect, Locator, Page } from '@playwright/test';

export class Cart {
    readonly page: Page;
    readonly EmptyCart: Locator;
    readonly ProductsLink: Locator;
    readonly CheckoutLink: Locator;
    readonly DeleteItem: Locator;
    readonly FirstItem: Locator;
    readonly SecondItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.EmptyCart = page.getByText("Cart is empty!");
        this.ProductsLink = page.getByRole("link", { name: "here" });
        this.CheckoutLink = page.getByText("Proceed To Checkout");
        this.DeleteItem = page.getByRole('cell', { name: '' }).locator('a');
        // I'm aware of the fact that this is not the best way to locate the items, but I couldn't find a better way
        this.FirstItem = page.getByRole('row', { name: 'Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 ' })
        this.SecondItem = page.getByRole('row', { name: 'Product Image Men Tshirt Men > Tshirts Rs. 400 1 Rs. 400 ' });
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

    async deleteItem() {
        await this.DeleteItem.click();
    }
}