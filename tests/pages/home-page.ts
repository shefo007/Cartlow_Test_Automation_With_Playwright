import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {

    protected readonly page: Page;
    private readonly accountHover: Locator;
    private readonly signInBtn: Locator;
    private readonly regionHover: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountHover = page.locator("//div[@class='container relative']//span[contains(text(),'Account')]");
        this.signInBtn = page.locator("//div[@class='container relative']//a[contains(text(),'Sign In')]");
        this.regionHover = page.locator("//div[@class='container relative']//button[not(contains(@type,'submit'))]/span[contains(text(),'INTL')]");
    }

    async goto() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.goto("/");
    }

    async clickSignIn() {
        await this.accountHover.hover({force: true});
        await this.signInBtn.click();
    }

    /**
     * @param region 
     */
    async chooseRegion(region: string) {
        const choice = this.page.locator(`//div[@class='container relative']//button[contains(@type,'submit')]/span[contains(text(),'${region}')]`)
        await this.regionHover.hover({force: true});
        await choice.click();
    }

    /**
     * @param tapName 
     */
    async selectTapItems(tapName: String) {
        const tapLocator = this.page.locator(`(//ul/li/a[@href="/${tapName.toLowerCase()}"])[1]`);
        
        try {
            await tapLocator.click();
        } catch (error) {
            console.warn(`Normal click failed, using JS click for ${tapLocator}`);
            await tapLocator.evaluate((el: HTMLElement) => el.click());
        }
    }

    async verifyPageTitle() {
        await this.page.goto("/");
        await expect(this.page).toHaveTitle("Cartlow International");
        console.log(await this.page.title());
    }
}