import { test, expect } from './base-test';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { TapItemsPage } from '../pages/tap-items-page';
import { Data } from '../test-data/test-data';
import { ItemDetailsPage } from '../pages/item-details-page';
import { CartPage } from '../pages/cart-page';

test('Full E2E workflow', async ({ homePage, tapItemsPage, itemDetailsPage, cartPage }) => {

    await homePage.chooseRegion(Data.getRegionData.uae);
    await homePage.selectTapItems(Data.getTapData.laptops);
    await tapItemsPage.selectItem(Data.getItemsData.laptops.lap1);
    await itemDetailsPage.clickAddToCartBtn();
    await tapItemsPage.selectTapItems(Data.getTapData.smartwatches);
    await tapItemsPage.selectItem(Data.getItemsData.smartwatches.smart1.name);
    await itemDetailsPage.addAllOptions(Data.getItemsData.smartwatches.smart1.connectivity
        , Data.getItemsData.smartwatches.smart1.color, 
        Data.getItemsData.smartwatches.smart1.size);
    await itemDetailsPage.clickPlusBtn();
    await itemDetailsPage.clickAddToCartBtn();
    await itemDetailsPage.clickViewCartBtn();
    await cartPage.removeItemFromCart(Data.getItemsData.laptops.lap1);
    await cartPage.clickAgreeConfirmation();
    
});

