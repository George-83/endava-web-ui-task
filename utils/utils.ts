/**
 * This file contains general-purpose utility functions
 */

import { Page } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { CartPage } from "../pages/cart-page";
import { ENV, baseURL } from '../playwright.config';


// Page paths
export const PagePaths = {
    Inventory: 'inventory.html',
    Cart: 'cart.html',
    CheckoutStepOne: 'checkout-step-one.html',
    CheckoutStepTwo: 'checkout-step-two.html',
    CheckoutComplete: 'checkout-complete.html',
} as const;

// Key type
export type PageKey = keyof typeof PagePaths;


// This function is a URL generator. It is used in tests to build the page URL
export function getUrl(page: PageKey) {
    const base = baseURL[ENV];
    const path = PagePaths[page];
    return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}

// This function gets the first "username" from the list of users and the "password"
export async function getCredentials(page: Page): Promise<{ username: string, password: string }> {
    const homePage = new HomePage(page);

    // Get all text from "usernames" and from "password" blocks
    const usernamesText = await homePage.usernamesContainer.innerHTML();
    const passwordsText = await homePage.passwordsContainer.textContent();

    // Check if could not extract credentials
    if (!usernamesText || !passwordsText) {
        throw new Error('Could not extract credentials from Home page');
    }

    // Remove headers, tags and spaces, make a list of users
    const usernamesList = usernamesText
        .replace('Accepted usernames are:', '')
        .split('<br>')
        .map(line => line.replace(/<[^>]*>/g, '').trim())
        .filter(Boolean);
    const passwordsRaw = passwordsText.replace('Password for all users:', '').trim();

    // Get first username
    const username = usernamesList[0];

    // Get password
    const password = passwordsRaw;

    // Check if could not extract credentials
    if (!username || !password) {
        throw new Error('Could not extract credentials from Home page');
    }

    return { username, password };
}


// This function is a login action
export async function login(page: Page): Promise<void> {
    const homePage = new HomePage(page);
    const { username, password } = await getCredentials(page);
    await homePage.usernameInput.fill(username);
    await homePage.passwordInput.fill(password);
    await homePage.submitLoginButton.click();
}


// This function is a logout action
export async function logout(page: Page): Promise<void> {
    const cartPage = new CartPage(page);
    await cartPage.openMenuButton.click();
    await cartPage.logoutButton.click();
}