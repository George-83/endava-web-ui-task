/**
 * This file contains UI tests for Scenario 1
 */
import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { InventoryPage } from "../../pages/inventoryPage";
import { CartPage } from "../../pages/cartPage";
import { CheckoutStepOnePage } from "../../pages/checkoutStepOnePage";
import { CheckoutStepTwoPage } from "../../pages/checkoutStepTwoPage";
import { CheckoutCompletePage } from "../../pages/checkoutCompletePage";
import { getCredentials } from "../../utils/utils";


test('@regression Scenario 1', async ({page}) => {
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
    await expect(page).toHaveURL('inventory.html');
    await inventoryPage.firstAddToCartButton.click();
    await inventoryPage.lastAddToCartButton.click();
    await expect(inventoryPage.firstAddToCartButton).toHaveText('Remove');
    await expect(inventoryPage.lastAddToCartButton).toHaveText('Remove');
    await inventoryPage.firstAddToCartButton.click();
    await inventoryPage.previousToTheLastButton.click();
    await expect(inventoryPage.firstAddToCartButton).toHaveText('Add to cart');
    await expect(inventoryPage.previousToTheLastButton).toHaveText('Remove');
    await inventoryPage.cartIconButton.click();
    await expect(page).toHaveURL('cart.html');
    await cartPage.checkOutButton.click();
    await  expect(page).toHaveURL('checkout-step-one.html');
    await checkoutStepOnePage.firstNameInput.fill('Ivan');
    await checkoutStepOnePage.lastNameInput.fill('Ivanov');
    await checkoutStepOnePage.postalCodeInput.fill('5000');
    await checkoutStepOnePage.submitCartButton.click();
    await expect(page).toHaveURL('checkout-step-two.html');
    await checkoutStepTwoPage.finishOrderButton.click();
    await expect(page).toHaveURL('checkout-complete.html');
    await expect(checkoutCompletePage.checkoutCompleteMessage).toHaveText('Checkout: Complete!');
    await expect(checkoutCompletePage.successImage).toBeVisible();
    await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
    await expect(checkoutCompletePage.completeText).toContainText('order has been dispatched');
    await expect(checkoutCompletePage.cartBadge).not.toBeVisible();
    await checkoutCompletePage.cartIconButton.click();
    await expect(page).toHaveURL('cart.html');
    await expect(cartPage.productsInCart).toHaveCount(0);
    await cartPage.openMenuButton.click();
    await cartPage.logoutButton.click();
    await expect(page).toHaveURL('/');
    await expect(homePage.submitLoginButton).toBeVisible();
});