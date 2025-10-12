import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home-page";


export class ItemDetailsPage extends HomePage {

    private readonly addToCartBtn: Locator;
    private readonly plusBtn: Locator;
    private readonly viewCartBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.addToCartBtn = page.locator("//button[contains(text(),'Add To Cart')]");
        this.plusBtn = page.locator("span.icon-plus");
        this.viewCartBtn = page.locator("//a[@title='View Cart']");
    }

    async clickAddToCartBtn() {
        try {
            await this.addToCartBtn.click();
        } catch (error) {
            console.error("Item out of stock: " + error);
        }
    }

    async clickPlusBtn() {
        try {
            if (await this.plusBtn.isEnabled()) {
                await this.plusBtn.click();
            }
        } catch (error) {
            console.error("May be only one item in stock ... " + error);
        }
    }

    async clickViewCartBtn() {
        try {
            await this.viewCartBtn.click();
        } catch (error) {
            console.error(error);
        }
    }

    async addAllOptions(...options:string[]) {
        for (const option of options) {
            const optionLocator = this.page.locator(`//label[@title="${option}"]/input`);
            try {
                await optionLocator.waitFor({state: 'visible'});
                const isChecked = await optionLocator.isChecked();
                if (!isChecked) {
                    await optionLocator.evaluate((el: HTMLElement) => el.click());
                }
            } catch (error) {
                console.error(error);
            }
        }
    }




}