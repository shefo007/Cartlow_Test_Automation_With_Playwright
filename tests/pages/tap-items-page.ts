import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home-page";

export class TapItemsPage extends HomePage {

    
    private readonly loadMoreBtn: Locator;
    private readonly itemCard: Locator;

    constructor(page: Page) {
        super(page);
        this.loadMoreBtn = page.locator("//button//span[normalize-space(text())='Load More']");
        this.itemCard = page.locator("//a[@class='relative']");
    }

    async selectItem(itemName: string) {

        while (true) {
            const correctItem = this.itemCard.filter({hasText: itemName});

            if (await correctItem.isVisible()) {
                await correctItem.click();
                break;
            } else {
                await this.loadMoreBtn.click();
            }
        }
    }
}