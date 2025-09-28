import {test,expect,Locator} from "@playwright/test"

test("page title",async ({page})=>{

    await page.goto("https://www.airindia.com/");
    let pagetitle:string = await page.title();
    console.log(pagetitle)

    const logoo:Locator= page.getByAltText(";ladskjf;sdkjf;lk")
   // logoo.click()
    expect(logoo).toBeVisible()

    check



})