/**
 * This file contains locators for "Cart" page
 */
import type { Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkOutButton: Locator;
    readonly productsInCart: Locator;
    readonly openMenuButton : Locator;
    readonly logoutButton : Locator;
    readonly firstProduct : Locator;
    readonly secondProduct : Locator;
    readonly continueShoppingButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.checkOutButton = page.locator('[data-test="checkout"]');
        this.productsInCart = page.locator('[data-test="inventory-item"]');
        this.openMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
        this.firstProduct = page.locator('[data-test="inventory-item-name"]').nth(0);
        this.secondProduct = page.locator('[data-test="inventory-item-name"]').nth(1);
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }
}