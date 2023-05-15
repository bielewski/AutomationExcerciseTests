import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';

test.beforeEach(async ({ page }) => {
    const CUPage = new ContactUsPage(page);
    await CUPage.goTo();
});

test('asserting visibility of Contact Us Form', async ({ page }) => {
    const CUPage = new ContactUsPage(page);
    await expect(CUPage.Header).toBeVisible();
});

test('sending message', async ({ page }) => {
    const CUPage= new ContactUsPage(page);
    const { NAME, EMAIL, SUBJECT, MSG} = process.env;
    await CUPage.nameSetter();
    await page.keyboard.type(NAME!);
    await CUPage.mailSetter();
    await page.keyboard.type(EMAIL!);
    await CUPage.subjectSetter();
    await page.keyboard.type(SUBJECT!);
    await CUPage.msgSetter();
    await page.keyboard.type(MSG!);
    // dealing with dialog
    await CUPage.sendBtnClick();
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
        });
    await CUPage.sendBtnClick();
    await expect(CUPage.SuccessMsg).toBeVisible();
});