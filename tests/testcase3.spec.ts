import {expect} from '@playwright/test'
//import {LoginPage} from '../pages/LoginPage'
//import { InventoryPage } from '../pages/InventoryPage'
//import { CartPage } from '../pages/CartPage'
import {test} from '../fixtures/pom-fixtures'

test('Verification of cart',async({page,loginPage,inventoryPage,cartPage})=>{
    //const loginPageObj = new LoginPage(page)
    //console.log(process.env.BASE_URL)
    await loginPage.goToApplication(process.env.BASE_URL)
    await page.waitForTimeout(2000)
    await loginPage.doLogin(process.env.USER_NAME,process.env.PASSWORD)

    //Inventory page
    //const inventoryPageObj = new InventoryPage(page)
    await inventoryPage.backPackAddToCart()
    await inventoryPage.clickOnCartIcon()

    //const cartPageObj = new CartPage(page)
    await expect(cartPage.cartPageTitle).toHaveText("Your Cart")
    await cartPage.goToCheckoutPage()
   
})