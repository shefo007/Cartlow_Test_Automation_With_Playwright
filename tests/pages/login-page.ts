import { type Locator, type Page } from "@playwright/test";


export class LoginPage {

    private readonly page: Page;
    private readonly mobileEmailField: Locator;
    private readonly continue: Locator;
    private readonly passwordField: Locator;
    private readonly signInBtn: Locator;

    constructor(page:Page) {
        this.page = page;
        this.mobileEmailField = this.page.locator("#identifier");
        this.continue = this.page.locator("//button/span[contains(text(), 'Continue')]");        
        this.passwordField = this.page.locator("#password");
        this.signInBtn = this.page.locator("//button/span[contains(text(),'Sign In')]");
    }

    async signIn(mobileEmail: string, password: string) {
        await this.mobileEmailField.fill(mobileEmail);
        await this.continue.click();
        await this.passwordField.fill(password);
        await this.signInBtn.click();
    }

}