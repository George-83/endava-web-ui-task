/**
 * This file contains UI tests for Scenario 1
 */
import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { InventoryPage } from "../../pages/inventoryPage";
import { getUrl, getCredentials } from "../../utils/utils";

test("Scenario 1", async ({page}) => {
    const homePage = new HomePage(page);
    const inventoryPage = new InventoryPage(page);
    await homePage.open();
    const { username, password } = await getCredentials(page);
    await homePage.usernameInput.fill(username);
    await homePage.passwordInput.fill(password);
    await homePage.submitButton.click();
    await expect(page).toHaveURL(getUrl('inventory.html'));
    await inventoryPage.firstButton.click();
    await inventoryPage.lastButton.click();
    await expect(inventoryPage.firstButton).toHaveText('Remove');
    await expect(inventoryPage.lastButton).toHaveText('Remove');
    await inventoryPage.firstButton.click();
    await inventoryPage.previousToTheLastButton.click();
    await expect(inventoryPage.firstButton).toHaveText('Add to cart');
    await expect(inventoryPage.previousToTheLastButton).toHaveText('Remove');
    await page.waitForTimeout(5000);
});