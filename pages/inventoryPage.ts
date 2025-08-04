/**
 * This file contains locators and navigations for "Inventory" page
 */
import type {Locator, Page} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryList: Locator;
    readonly allButtons : Locator;
    readonly firstButton : Locator;
    readonly lastButton : Locator;
    readonly previousToTheLastButton : Locator;
    readonly cartButton : Locator;


    constructor(page: Page) {
        this.page = page;
        this.inventoryList = page.locator('[data-test="inventory-list"]');
        this.allButtons = this.inventoryList.locator('Button');
        this.firstButton = this.allButtons.first();
        this.lastButton = this.allButtons.last();
        this.previousToTheLastButton = this.allButtons.nth(4);
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
    }
}