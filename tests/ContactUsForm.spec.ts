import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';

test.beforeEach(async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goTo();
});

test('asserting visibility of Contact Us Form', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await expect(contactUsPage.Header).toBeVisible();
});

test('sending message', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    const { NAME, EMAIL, SUBJECT, MSG} = process.env;
    // fill the fields
    await contactUsPage.nameSetter();
    await page.keyboard.type(NAME!);
    await contactUsPage.mailSetter();
    await page.keyboard.type(EMAIL!);
    await contactUsPage.subjectSetter();
    await page.keyboard.type(SUBJECT!);
    await contactUsPage.msgSetter();
    await page.keyboard.type(MSG!);
    // dealing with dialog
    await contactUsPage.sendBtnClick();
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
        });
    await contactUsPage.sendBtnClick();
    // assert that the message was sent
    await expect(contactUsPage.SuccessMsg).toBeVisible();
});