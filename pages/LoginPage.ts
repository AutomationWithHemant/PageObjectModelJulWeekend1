import {Page,Locator} from '@playwright/test'

export class LoginPage 
{
    readonly page: Page
    readonly usernameInputBox: Locator;
    readonly passwordInputBox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page)
    {
        this.page = page
        this.usernameInputBox = page.locator('#user-name')
        this.passwordInputBox = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

    async goToApplication(url: any)
    {
        await this.page.goto(url)
    }

    async doLogin(usernameVal: any,passwordVal: any){
        await this.usernameInputBox.fill(usernameVal)
        await this.passwordInputBox.fill(passwordVal)
        await this.loginButton.click()
    }
}