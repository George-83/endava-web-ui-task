/**
 * This file contains UI tests for Scenario 2
 */
import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { InventoryPage } from "../../pages/inventoryPage";
import { getUrl, login, logout } from "../../utils/utils";

test("Scenario 2", async ({page}) => {
    const homePage = new HomePage(page);
    const inventoryPage = new InventoryPage(page);
    await homePage.open();
    await login(page);
    await expect(page).toHaveURL(getUrl('inventory.html'));
    await inventoryPage.sortDropdown.selectOption('Price (high to low)');
    await expect(inventoryPage.textOnSortDropdown).toHaveText('Price (high to low)');

    // Get actual prices text
    const pricesText = await inventoryPage.allProductPrices.allTextContents();

    // Convert to float
    const actualPrices = pricesText.map(text => parseFloat(text.replace('$', '')));

    // Get expected sorted prices
    const expectedPrices = [...actualPrices].sort((a, b) => b - a);

    // Compare actual with expected
    expect(actualPrices).toEqual(expectedPrices);

    await logout(page);
    await expect(page).toHaveURL(getUrl('/'));
    await expect(homePage.submitLoginButton).toBeVisible();
});