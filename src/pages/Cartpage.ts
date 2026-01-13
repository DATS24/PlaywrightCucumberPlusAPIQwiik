import { Locator, Page, expect } from "@playwright/test";

export class Cartpage {

    readonly page: Page

    readonly Menubtn: Locator

    readonly Logoutbtn: Locator

    readonly Cartbadge: Locator

    readonly RmvItem1: Locator

    readonly RmvItem2: Locator

    readonly Checkout: Locator

    readonly Firstname: Locator

    readonly Lastname: Locator

    readonly Postcode: Locator

    readonly Continue: Locator

    constructor(page: Page){
        this.page = page

        //Elements
        this.Menubtn = page.locator("#react-burger-menu-btn")

        this.Logoutbtn = page.locator("#logout_sidebar_link")

        this.Cartbadge = page.locator("#shopping_cart_container > a > span")

        this.RmvItem1 = page.locator("#remove-sauce-labs-backpack")

        this.RmvItem2 = page.locator("#remove-sauce-labs-bike-light")

        this.Checkout = page.locator("#checkout")

        this.Firstname = page.locator("#first-name")

        this.Lastname = page.locator("#last-name")

        this.Postcode = page.locator("#postal-code")

        this.Continue = page.locator("#continue")

    }

    //Methods
    async Rmv1item(){
        await this.RmvItem1.click()
        await expect(this.Cartbadge).toBeHidden()
    }

    async Rmv2item(){
        await this.RmvItem1.click()
        await expect(this.Cartbadge).toHaveText("1")
        await this.RmvItem2.click()
        await expect(this.Cartbadge).toBeHidden()
    }

    async GotoCheckout(){
        await this.Checkout.click()
        await this.Firstname.fill("aaa")
        await this.Lastname.fill("bbb")
        await this.Postcode.fill("12345")
        await this.Continue.click()
    }


}