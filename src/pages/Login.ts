import { Locator, Page } from "@playwright/test";

export class Login {

    readonly page: Page

    readonly Username: Locator

    readonly Password: Locator

    readonly Loginbtn: Locator

    readonly Errormsg: Locator

    constructor(page: Page){
        this.page = page

        //Elements
        this.Username = page.locator("#user-name")

        this.Password = page.locator("#password")

        this.Loginbtn = page.locator("#login-button")

        this.Errormsg = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')
    }

    //Methods
    async Loginmethod(username: string, password: string){
        await this.Username.fill(username)
        await this.Password.fill(password)
        await this.Loginbtn.click()
    }
}