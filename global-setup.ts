import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    process.env.EMAIL = 'inspectah@rude.com';
    process.env.PASSWORD = 'example_password';
    process.env.EXISTING_EMAIL = 'example@example.com';
    process.env.REVIEW = 'This is a review';
    process.env.NAME = 'John Doe';
    }

export default globalSetup;