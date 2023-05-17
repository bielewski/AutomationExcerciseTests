import { expect, Locator, Page } from '@playwright/test';

export class Cart {
    readonly page: Page;
    readonly EmptyCart: Locator;
    readonly ProductsLink: Locator;
    readonly CheckoutLink: Locator;
    readonly DeleteItem: Locator;
    readonly FirstItem: Locator;
    readonly SecondItem: Locator;
    readonly PlaceOrderBtn: Locator;
    readonly NameOnCard: Locator;
    readonly CardNumber: Locator;
    readonly CVV: Locator;
    readonly ExpMonth: Locator;
    readonly ExpYear: Locator;
    readonly PayOrder: Locator;
    readonly OrderPlaced: Locator;

    constructor(page: Page) {
        this.page = page;
        this.EmptyCart = page.getByText("Cart is empty!");
        this.ProductsLink = page.getByRole("link", { name: "here" });
        this.CheckoutLink = page.getByText("Proceed To Checkout");
        this.DeleteItem = page.getByRole('cell', { name: '' }).locator('a');
        // I'm aware of the fact that this is not the best way to locate the items, but I couldn't find a better way
        this.FirstItem = page.getByRole('row', { name: 'Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 ' })
        this.SecondItem = page.getByRole('row', { name: 'Product Image Men Tshirt Men > Tshirts Rs. 400 1 Rs. 400 ' });
        this.PlaceOrderBtn = page.getByRole('link', { name: 'Place Order' });
        this.NameOnCard = page.locator('input[name="name_on_card"]');
        this.CardNumber = page.locator('input[name="card_number"]');
        this.CVV = page.getByPlaceholder('ex. 311');
        this.ExpMonth = page.getByPlaceholder('MM');
        this.ExpYear = page.getByPlaceholder('YYYY');
        this.PayOrder = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.OrderPlaced = page.getByText('Order Placed!');
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

    async placeOrder() {
        await this.PlaceOrderBtn.click();
    }

    async nameOnCardSetter(name: string) {
        await this.NameOnCard.fill(name);
    }

    async cardNumberSetter(cardNumber: string) {
        await this.CardNumber.fill(cardNumber);
    }

    async cvvSetter(cvv: string) {
        await this.CVV.fill(cvv);
    }

    async expMonthSetter(expMonth: string) {
        await this.ExpMonth.fill(expMonth);
    }

    async expYearSetter(expYear: string) {
        await this.ExpYear.fill(expYear);
    }

    async payOrder() {
        await this.PayOrder.click();
    }

}