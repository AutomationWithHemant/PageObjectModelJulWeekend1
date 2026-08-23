import {Locator,Page} from '@playwright/test'

export class CheckoutPage{
    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly postalCode: Locator
    readonly continueBtn: Locator

    constructor(page: Page)
    {
        this.page = page;
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.postalCode = page.getByPlaceholder('Zip/Postal Code')
        this.continueBtn = page.getByRole('button',{name:'Continue'})
    }

    async enterCheckoutInformation()
    {
        await this.firstName.fill('sdfsdfsdf')
        await this.lastName.fill('sfsdfds')

    }
}