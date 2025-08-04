/**
 * This file contains locators for "Inventory" page
 */
import type { Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly allProductsOnPage: Locator;
    readonly allAddToCartButtons : Locator;
    readonly firstAddToCartButton : Locator;
    readonly lastAddToCartButton : Locator;
    readonly previousToTheLastButton : Locator;
    readonly cartIconButton : Locator;
    readonly sortDropdown : Locator;
    readonly allProductPrices : Locator;
    readonly textOnSortDropdown : Locator;


    constructor(page: Page) {
        this.page = page;
        this.allProductsOnPage = page.locator('[data-test="inventory-list"]');
        this.allAddToCartButtons = this.allProductsOnPage.locator('Button');
        this.firstAddToCartButton = this.allAddToCartButtons.first();
        this.lastAddToCartButton = this.allAddToCartButtons.last();
        this.previousToTheLastButton = this.allAddToCartButtons.nth(4);
        this.cartIconButton = page.locator('[data-test="shopping-cart-link"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.allProductPrices = page.locator('[data-test="inventory-item-price"]');
        this.textOnSortDropdown = page.locator('[data-test="active-option"]');
    }
}