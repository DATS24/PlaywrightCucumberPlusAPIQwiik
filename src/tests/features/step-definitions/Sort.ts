import {test, Browser, Page, expect, chromium} from '@playwright/test'
import { Given, When, Then } from '@cucumber/cucumber';
import { Login } from '../../../pages/Login';
import { Inventory } from '../../../pages/Inventory';

const Usrname = [
  'standard_user',
  'standard_users',
  ''
] as const;

const Pswd = [
  'secret_sauce',
  'secret_sauces',
  ''
] as const;

let browser: Browser
let page: Page

Given('A browser is launched', async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://saucedemo.com')
})

When('User login to Saucedemo as standard user', async function() {
    const login = new Login(page)
    await login.Loginmethod(Usrname[0],Pswd[0])
    await expect.soft(page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText("Swag Labs")
    const inventory = new Inventory(page)
})

When('User sort item by Price Low to High', async function() {
    const inventory = new Inventory(page)
    await inventory.SortItem()
})

Then('User should be able to see items sorted by Price Low to High', async function() {
    await expect.soft(page.locator("#item_4_title_link > div")).toHaveText("Sauce Labs Backpack")
    await expect.soft(page.locator("#item_0_title_link > div")).toHaveText("Sauce Labs Bike Light")
    await expect.soft(page.locator("#item_5_title_link > div")).toHaveText("Sauce Labs Bolt T-Shirt")
    await expect.soft(page.locator("#item_1_title_link > div")).toHaveText("Sauce Labs Fleece Jacket")
    await expect.soft(page.locator("#item_2_title_link > div")).toHaveText("Sauce Labs Onesie")
    await expect.soft(page.locator("#item_3_title_link > div")).toHaveText("Test.allTheThings() T-Shirt (Red)")
    const inventory = new Inventory(page)
    await inventory.Logout()
})

