import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    process.env.EMAIL = 'inspectah@rude.com';
    process.env.PASSWORD = 'example_password';
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
    }

export default globalSetup;