/**
 * This file contains locators and navigations for "Checkout Step Two" page
 */
import type {Locator, Page} from '@playwright/test';

export class CheckoutStepTwoPage {
    readonly page: Page;
    readonly finishOrderButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.finishOrderButton = page.locator('[data-test="finish"]');
    }
}