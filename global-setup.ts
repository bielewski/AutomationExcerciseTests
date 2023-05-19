import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    process.env.CORRECT_EMAIL = 'inspectah@rude.com'
    process.env.CORRECT_PASSWORD = 'example_password';
    process.env.EMAIL = 'bielewski@bielewski.com';
    process.env.PASSWORD = 'example_password';
    process.env.EMAILFORAPI = "bielewski1@bielewski.com"
    process.env.EXISTING_EMAIL = 'example@example.com';
    process.env.REVIEW = 'This is a review';
    process.env.NAME = 'John';
    process.env.LAST_NAME = 'Doe';
    process.env.COMPANY = 'Example Company';
    process.env.ADDRESS = 'Example Street 1';
    process.env.ADDRESS2 = 'Example Street 2';
    process.env.CITY = 'Example City';
    process.env.STATE = 'Alabama';
    process.env.ZIP = '12345';
    process.env.MOBILE = '123456789';
    process.env.SUBJECT = 'Example Subject';
    process.env.MSG = 'Example Message';
    process.env.CARD_NUMBER = '4444 3333 2222 1111';
    process.env.CVV = '123';
    process.env.EXP_MONTH = '12';
    process.env.EXP_YEAR = '23';
    process.env.COUNTRY = 'United States';
    process.env.BIRTHDAY = '1';
    process.env.BIRTHMONTH = '1';
    process.env.BIRTHYEAR = '2020';
    process.env.GENDER = 'Mr';
    }

export default globalSetup;