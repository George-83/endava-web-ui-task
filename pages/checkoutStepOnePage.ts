/**
 * This file contains locators for "Checkout Step One" page
 */
import type { Locator, Page } from '@playwright/test';

export class CheckoutStepOnePage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly submitCartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.submitCartButton = page.locator('[data-test="continue"]');
    }
}