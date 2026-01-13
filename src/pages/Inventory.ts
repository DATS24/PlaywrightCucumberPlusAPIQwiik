import { Locator, Page, expect } from "@playwright/test";

export class Inventory {

    readonly page: Page

    readonly Menubtn: Locator

    readonly Logoutbtn: Locator

    readonly Cart: Locator

    readonly Cartbadge: Locator

    readonly AddItem1: Locator

    readonly AddItem2: Locator


    constructor(page: Page){
        this.page = page

        //Elements
        this.Menubtn = page.locator("#react-burger-menu-btn")

        this.Logoutbtn = page.locator("#logout_sidebar_link")

        this.Cart = page.locator("#shopping_cart_container > a")

        this.Cartbadge = page.locator("#shopping_cart_container > a > span")

        this.AddItem1 = page.locator("#add-to-cart-sauce-labs-backpack")

        this.AddItem2 = page.locator("#add-to-cart-sauce-labs-bike-light")

    }

    //Methods
    async Add1item(){
        await this.AddItem1.click()
        await expect(this.Cartbadge).toHaveText("1")
    }

    async Add2item(){
        await this.AddItem1.click()
        await expect(this.Cartbadge).toHaveText("1")
        await this.AddItem2.click()
        await expect(this.Cartbadge).toHaveText("2")
    }

    async Gotocart(){
        await this.Cart.click()
    }

    async Logout(){
        await this.Menubtn.click()
        await this.Logoutbtn.click()
    }
}