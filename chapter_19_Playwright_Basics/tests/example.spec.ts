import {test,expect} from '@playwright/test';

// Page- Inbuild fixture is automatically given to you
// Which are the functions you can directly use in playwright.

test("Verify that the title will be TTA cart",async ({page}) => {

   await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  // await expect(page).toHaveTitle("TTACart - Login");
  // await page.waitForTimeout(5000);
});