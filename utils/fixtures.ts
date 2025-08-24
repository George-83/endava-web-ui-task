/**
 * This file contains fixtures used across the tests
 */

import { test as base } from '@playwright/test';
import { HomePage } from "../pages/home-page";
import { InventoryPage } from "../pages/inventory-page";
import { CartPage } from "../pages/cart-page";
import { CheckoutStepOnePage } from "../pages/checkout-step-one-page";
import { CheckoutStepTwoPage } from "../pages/checkout-step-two-page";
import { CheckoutCompletePage } from "../pages/checkout-complete-page";


// Fixture for Scenario 1
type Pages = {
  homePage: HomePage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<{ pages: Pages }>({
  pages: async ({ page }, use) => {
    const pages: Pages = {
      homePage: new HomePage(page),
      inventoryPage: new InventoryPage(page),
      cartPage: new CartPage(page),
      checkoutStepOnePage: new CheckoutStepOnePage(page),
      checkoutStepTwoPage: new CheckoutStepTwoPage(page),
      checkoutCompletePage: new CheckoutCompletePage(page),
    };
    await use(pages);
  },
});