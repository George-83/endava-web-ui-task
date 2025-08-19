/**
 * This file contains fixtures used across the tests
 */

import { test as base } from '@playwright/test';
import { HomePage } from "../pages/homePage";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutStepOnePage } from "../pages/checkoutStepOnePage";
import { CheckoutStepTwoPage } from "../pages/checkoutStepTwoPage";
import { CheckoutCompletePage } from "../pages/checkoutCompletePage";


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