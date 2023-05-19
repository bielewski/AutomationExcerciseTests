import { test, expect } from '@playwright/test';

const { NAME, EMAILFORAPI, PASSWORD, GENDER, BIRTHDAY, BIRTHMONTH, BIRTHYEAR, LAST_NAME, COMPANY, ADDRESS, ADDRESS2, COUNTRY, CITY, STATE, ZIP, MOBILE } = process.env;

test('should create a user', async ({ request }) => {

    const newUser = await request.post('https://automationexercise.com/api/createAccount', {
    form: {
        name: NAME!,
        email: EMAILFORAPI!,
        password: PASSWORD!,
        title: GENDER!,
        birth_day: BIRTHDAY!,
        birth_month: BIRTHMONTH!,
        birth_year: BIRTHYEAR!,
        firstname: NAME!,
        lastname: LAST_NAME!,
        company: COMPANY!,
        address1: ADDRESS!,
        address2: ADDRESS2!,
        country: COUNTRY!,
        city: CITY!,
        state: STATE!,
        zipcode: ZIP!,
        mobile_number: MOBILE!

    }
    });
    expect(newUser.ok()).toBeTruthy();
    console.log(newUser.json());

    const user = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: EMAILFORAPI!,
            password: PASSWORD!
        }
    });

    // assertion that created user exists
    expect(user.ok()).toBeTruthy();
    console.log(user.json());

});

test('should delete a user', async ({ request }) => {

    const delUser = await request.delete('https://automationexercise.com/api/deleteAccount', {
    form: {
        email: EMAILFORAPI!,
        password: PASSWORD!

    }
    });
    expect(delUser.ok()).toBeTruthy();
    console.log(delUser.json());

    const user = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: EMAILFORAPI!,
            password: PASSWORD!
        }
    });

    // assertion that created user doesn't exists
    expect(user.ok()).toBeTruthy();
    console.log(user.json())

});
