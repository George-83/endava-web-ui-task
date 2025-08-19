/**
 * This file contains locators and navigations for "Home" page
 */

import type { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly usernamesContainer: Locator;
    readonly passwordsContainer: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitLoginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernamesContainer = page.locator('[data-test="login-credentials"]');
        this.passwordsContainer = page.locator('[data-test="login-password"]');
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.submitLoginButton = page.locator('[data-test="login-button"]');
    }
    // This navigates to Home page. Base URL is defined in the playwright.config.ts file
    async open(){
        await this.page.goto('/');
    }
}