import {test as base} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { TapItemsPage } from '../pages/tap-items-page';
import { ItemDetailsPage } from '../pages/item-details-page';
import { CartPage } from '../pages/cart-page';

type MyPages = {
    homePage: HomePage;
    tapItemsPage: TapItemsPage;
    itemDetailsPage: ItemDetailsPage;
    cartPage: CartPage;
}

export const test = base.extend<MyPages> ({

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        // Go to cartlow webapp
        await homePage.goto();
        await use(homePage);
    },

    tapItemsPage: async ({ page }, use) => {
        await use(new TapItemsPage(page));
    },

    itemDetailsPage: async ({ page }, use) => {
        await use(new ItemDetailsPage(page));
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);

        // Clean up the cart
        await cartPage.removeAllItemsFromCart();
        // verify the cart
        await cartPage.verifyNoProductInCart();
    }
    
});

export { expect } from '@playwright/test';


