import { test, expect, Locator } from "@playwright/test"


test.beforeEach('beforeeach_LaunchBrowser', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[name='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await page.waitForTimeout(3000)
    console.log('before each test')

})

test.afterEach('afterEach_Logout', async ({ page }) => {
    await page.locator(".oxd-userdropdown-tab").click()
    await page.getByText('Logout').click()
    await page.waitForTimeout(3000)
    console.log('after each test')
   

})

test('verify page title', async ({ page }) => {


    const titlee = await page.getByRole('link', { name: 'Dashboard' }).innerText()
     console.log(titlee)
     expect(titlee).toBe("Dashboard") //OrangeHRM OS 5.7
    //page.waitForTimeout(6000);
    console.log(' test 1')

})
test('verify page Footer', async ({ page }) => {


    const titlee1 = await page.getByText('OrangeHRM OS 5.7').innerText()
     console.log(titlee1)
     expect(titlee1).toBe("OrangeHRM OS 5.7") //OrangeHRM OS 5.7
    //page.waitForTimeout(6000);
    console.log(' test 2')

})




