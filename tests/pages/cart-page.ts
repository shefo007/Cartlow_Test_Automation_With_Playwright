import { expect, Locator, Page } from "@playwright/test";
import { HomePage } from "./home-page";


export class CartPage extends HomePage {

    private readonly itemCard: Locator;
    private readonly agreeBtn: Locator;
    private readonly noProductConfirmation: Locator;

    constructor(page: Page) {
        super(page);
        this.itemCard = page.locator("//div[@class='divide-y']");
        this.agreeBtn = page.locator("//button[contains(text(),'Agree')]");
        this.noProductConfirmation = page.getByText("You don’t have a product in your cart.");
    }

    async removeItemFromCart(itemName: string) {
        try {
            const correctItem = this.itemCard.filter({hasText: itemName});
            await correctItem.waitFor({state: 'visible'});
            if (await correctItem.isVisible()) {
                await correctItem.getByText("Remove").click();
            }
        } catch (error) {
            console.error(error);
        }
    }

    async clickAgreeConfirmation() {
        await this.agreeBtn.click();
    }

    async removeAllItemsFromCart() {
        while ((await this.itemCard.count()) > 0) {
            await this.itemCard.first().getByText('Remove').click();
            await this.clickAgreeConfirmation();
        }
    }

    async verifyNoProductInCart() {
        await expect(this.noProductConfirmation).toContainText("You don’t have a product in your cart.");
    }
}

