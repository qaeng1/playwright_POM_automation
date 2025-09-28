import {test,expect,Locator} from "@playwright/test"

/*
test("check boxes", async ({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/")

let days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

for(let i:number=0;i<days.length;i++){

const dayLocator: Locator=  page.getByLabel(days[i]);

await dayLocator.check()

}

await page.waitForTimeout(10000);




})

*/

/*
test("checkboxes", async ({page})=>{

//input[type='checkbox'][class='form-check-input']
await page.goto("https://testautomationpractice.blogspot.com/")

let ll:Locator[]=await page.locator("div[class='widget-content']>ul>li>a").all()

console.log("--------------------------->",ll.length);

for(let i=0;i<ll.length;i++){

 console.log(await ll[i].innerText())
}

}) */


/*

test("checkboxes innerText validation", async ({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/")

  let  txt : Locator[] =  await page.locator(".form-group>div>label").all()
  let count:number=0;
for(let t of txt){
 if(await t.innerText() == "Male" || await t.innerText() == "Female"){ 
 console.log("matching found for : --->",await t.innerText())
}
else{
 await t.check()
 console.log("Label name Before clicking is:======",await t.innerText())

}
}
await page.waitForTimeout(5000)
}) 


*/

/*
test("flipkart search using hidden dropdown options", async ({page})=>{

await page.goto("https://flipkart.in"); //getByRole('link', { name: 'Login Login' })

await page.locator("input[name='q']").fill("mobiles")

await page.waitForTimeout(5000)

const noOfLoc:Locator= page.locator("ul>li");
const counting= await noOfLoc.count()
console.log(counting)
await noOfLoc.nth(0).click()
await page.waitForTimeout(5000)

}) 
*/


test('Orange ORM dropdowns', async ({page})=>{

 

await page.goto("https://testautomationpractice.blogspot.com//");
//table[name='BookTable'] td

const tds:Locator = page.locator("table[name='BookTable'] td")
//console.log(tds)
/*for(let loc=0;loc<tds.length;loc++){
console.log(await tds[loc].innerText())

}
*/
const tabledata:string[]=await tds.allInnerTexts()
console.log(tabledata)

})
