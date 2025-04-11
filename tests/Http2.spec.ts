import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1000;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

var myArray=['Jesus','Jesus@prueba.com','SuperSecretPassword!'];
var rand = myArray[(Math.random() *myArray.length) | 0]
console.log(rand)

//npx playwrigth codegen --save-storage=auth.json
//https://www.saucedemo.com/
//archivo auth.json
test.describe('HTTP Aunthetication 2', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext({
            storageState: "./auth.json",
            
        });
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        
        await f.scroll(0, 600, tg);
        console.log('Termina la Base');
    });

test('Http Authentication', async () =>{
    await f.openUrl("https://www.saucedemo.com/inventory.html")
    await f.click("//button[contains(@id,'add-to-cart-sauce-labs-backpack')]",tg)
    await f.click("//button[contains(@id,'add-to-cart-sauce-labs-bike-light')]",tg)
    await f.validar_texto("//div[@class='inventory_item_name '][contains(.,'Sauce Labs Backpack')]","Sauce",tg)
    await f.tiempo(3000)
})



    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
