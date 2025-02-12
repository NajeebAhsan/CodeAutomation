import { test } from '@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage';
import { FormPage } from '../Pages/FormPage';
import * as userData from '../my_data.json';

test('User Registration', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const formPage = new FormPage(page);
    const user = userData.users[0];

    // Step 1: Register the user
    await registerPage.goto();
    await registerPage.fillForm(user);
    await registerPage.submit();
    // await registerPage.practicef();
});

test('Form Filling Test', async ({ page }) => {
    const formPage = new FormPage(page);
    const user = userData.users[0];
    // Step 2: Fill out the practice form
    await formPage.goto();
    await formPage.fillForm(user);
    await formPage.selectStateAndCity('Uttar Pradesh', 'Agra');

    console.log('User Registration and Form Filling Completed Successfully');
});
