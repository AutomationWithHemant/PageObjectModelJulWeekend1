import {Page,Locator} from '@playwright/test'

export class InventoryPage {
    readonly page:Page
    readonly addToCartButtonBackpack : Locator
    readonly removeButton: Locator
    readonly cartIcon: Locator

    constructor(page: Page)
    {
        this.page = page
        this.addToCartButtonBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
    }

    async backPackAddToCart(){
        await this.addToCartButtonBackpack.click()
    }

    async clickOnCartIcon(){
        await this.cartIcon.click()
    }

}