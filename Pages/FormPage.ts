import { Page } from '@playwright/test';

export class FormPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    }

    async fillForm(user: { fname: string; email: string; numb: string; subj: string }) {
        await this.page.fill('//*[@id="name"]', user.fname);
        await this.page.fill('//*[@id="email"]', user.email);
        await this.page.click('//*[@id="gender"]');
        await this.page.fill('//*[@id="mobile"]', user.numb);
        await this.page.fill('//*[@id="subjects"]', user.subj);
        await this.page.click('//*[@id="hobbies"]');
    }

    async selectStateAndCity(state: string, city: string) {
        await this.page.selectOption('#state', { label: state });
        console.log(`Successfully selected ${state}`);
        await this.page.selectOption('#city', { label: city });
        console.log(`Successfully selected ${city}`);
    }
}
