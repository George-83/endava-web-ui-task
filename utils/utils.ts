/**
 * This file contains general-purpose utility functions
 */
import { Page } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";

// This function returns baseURL. It is used in tests to build the page URL
export function getUrl(path: string) {
    return `${path}`;
}


// This function gets the first "username" and "password" from Home page
export async function getCredentials(page: Page): Promise<{ username: string, password: string }> {
    const homePage = new HomePage(page);

    // Get all text from "usernames" and from "password" blocks
    const usernames = await homePage.usernamesContainer.textContent();
    const passwords = await homePage.passwordsContainer.textContent();

    // Check if could not extract credentials
    if (!usernames || !passwords) {
        throw new Error('Could not extract credentials from Home page');
    }

    // Remove headers and spaces
    const usernamesRaw = usernames.replace('Accepted usernames are:', '').trim();
    const passwordsRaw = passwords.replace('Password for all users:', '').trim();

    // Get first username
    const usernameMatch = usernamesRaw.match(/standard_user/);
    const username = usernameMatch ? usernameMatch[0] : null;

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