/**
 * This file contains UI tests for Scenario 1
 */
import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { InventoryPage } from "../../pages/inventoryPage";
import { CartPage } from "../../pages/cartPage";
import { CheckoutStepOnePage } from "../../pages/checkoutStepOnePage";
import { CheckoutStepTwoPage} from "../../pages/checkoutStepTwoPage";
import { CheckoutCompletePage } from "../../pages/checkoutCompletePage";
import { getUrl, getCredentials } from "../../utils/utils";

test("Scenario 1", async ({page}) => {
    const homePage = new HomePage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await homePage.open();
    const { username, password } = await getCredentials(page);
    await homePage.usernameInput.fill(username);
    await homePage.passwordInput.fill(password);
    await homePage.submitLoginButton.click();
    await expect(page).toHaveURL(getUrl('inventory.html'));
    await inventoryPage.firstButton.click();
    await inventoryPage.lastButton.click();
    await expect(inventoryPage.firstButton).toHaveText('Remove');
    await expect(inventoryPage.lastButton).toHaveText('Remove');
    await inventoryPage.firstButton.click();
    await inventoryPage.previousToTheLastButton.click();
    await expect(inventoryPage.firstButton).toHaveText('Add to cart');
    await expect(inventoryPage.previousToTheLastButton).toHaveText('Remove');
    await inventoryPage.cartButton.click();
    await expect(page).toHaveURL(getUrl('cart.html'));
    await cartPage.checkOutButton.click();
    await  expect(page).toHaveURL(getUrl('checkout-step-one.html'));
    await checkoutStepOnePage.firstNameInput.fill('Ivan');
    await checkoutStepOnePage.lastNameInput.fill('Ivanov');
    await checkoutStepOnePage.postalCodeInput.fill('5000');
    await checkoutStepOnePage.submitCartButton.click();
    await expect(page).toHaveURL(getUrl('checkout-step-two.html'));
    await checkoutStepTwoPage.finishOrderButton.click();
    await expect(page).toHaveURL(getUrl('checkout-complete.html'));
    await expect(checkoutCompletePage.checkoutCompleteMessage).toHaveText('Checkout: Complete!');
    await expect(checkoutCompletePage.successImage).toBeVisible();
    await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
    await expect(checkoutCompletePage.completeText).toContainText('order has been dispatched');
    await expect(checkoutCompletePage.cartBadge).not.toBeVisible();
    await checkoutCompletePage.cartButton.click();
    await expect(page).toHaveURL(getUrl('cart.html'));
    await expect(cartPage.productInCart).toHaveCount(0);
    await cartPage.openMenuButton.click();
    await cartPage.logoutButton.click();
    await expect(page).toHaveURL(getUrl('/'));
    await expect(homePage.submitLoginButton).toBeVisible();
});