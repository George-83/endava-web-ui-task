/**
 * This file contains locators for "Checkout Complete" page
 */
import type {Locator, Page} from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page;
    readonly checkoutCompleteMessage: Locator;
    readonly successImage: Locator;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly cartIconButton : Locator;
    readonly cartBadge : Locator;


    constructor(page: Page) {
        this.page = page;
        this.checkoutCompleteMessage = page.locator('[data-test="secondary-header"]');
        this.successImage = page.locator('[data-test="pony-express"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeText = page.locator('[data-test="complete-text"]');
        this.cartIconButton = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    }
}