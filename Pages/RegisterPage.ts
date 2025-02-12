import { Page } from '@playwright/test';

export class RegisterPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.tutorialspoint.com/selenium/practice/register.php');
    }

    async fillForm(user: { fname: string; lname: string; username: string; pass: string }) {
        await this.page.fill('//*[@id="firstname"]', user.fname);
        await this.page.fill('//*[@id="lastname"]', user.lname);
        await this.page.fill('//*[@id="username"]', user.username);
        await this.page.fill('//*[@id="password"]', user.pass);
    }

    async submit() {
        await this.page.click("input[type='submit']");
    }

    async practicef() {
        await this.page.click('//*[@id="collapseTwo"]/div/ul/li[1]');
    }
}
