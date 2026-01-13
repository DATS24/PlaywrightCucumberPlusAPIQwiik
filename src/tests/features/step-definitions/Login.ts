import {test, Browser, Page, expect, chromium} from '@playwright/test'
import { Given, When, Then } from '@cucumber/cucumber';
import { Login } from '../../../pages/Login';
import { Inventory } from '../../../pages/Inventory';
import { Cartpage } from '../../../pages/Cartpage';

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

When('User add item to cart', async function() {
    const item1 = await page.locator("#item_4_title_link > div").textContent()
    const inventory = new Inventory(page)
    await inventory.Add1item()
    await inventory.Gotocart()
    await expect.soft(page.locator("#item_4_title_link > div")).toHaveText(`${item1}`)
    const cartpage = new Cartpage(page)
    await cartpage.Rmv1item()
})

Then('User should be able to checkout item, then logout', async function() {
    const inventory = new Inventory(page)
    const item1 = await page.locator("#item_4_title_link > div").textContent()
    const item2 = await page.locator("#item_0_title_link > div").textContent()
    await inventory.Add2item()
    await inventory.Gotocart()
    const cartpage = new Cartpage(page)
    await cartpage.GotoCheckout()
    await expect.soft(page.locator("#item_4_title_link > div")).toHaveText(`${item1}`)
    await expect.soft(page.locator("#item_0_title_link > div")).toHaveText(`${item2}`)
    await page.locator("#finish").click()
    await expect.soft(page.locator("#checkout_complete_container > h2")).toHaveText("Thank you for your order!")
    await page.locator("#checkout_complete_container > h2").click()
    await inventory.Logout()
})


