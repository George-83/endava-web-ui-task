/**
 * This file contains locators and navigations for "Cart" page
 */
import type {Locator, Page} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkOutButton: Locator;
    readonly productInCart: Locator;
    readonly openMenuButton : Locator;
    readonly logoutButton : Locator;


    constructor(page: Page) {
        this.page = page;
        this.checkOutButton = page.locator('[data-test="checkout"]');
        this.productInCart = page.locator('[data-test="inventory-item"]');
        this.openMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
    }
}