import { test, expect, chromium } from '@playwright/test';

test.describe('Cargando el navegador', () =>{


    // test.use({
    //     viewport:{width:1900, height:800},
    // })

    const sleep = (ms: number | 5000) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test('Hola mundo', async () => {

        const browsers=await chromium.launch({
            headless: false,
        })

        const context=await browsers.newContext();
        const page=await context.newPage();



        await page.goto('https://demoqa.com/text-box');
        await expect(page).toHaveTitle(/DEMOQA/);
        await expect(page).toHaveURL(/.*text-box/);
        // await page.locator("#userName").fill("Jesus")
        await page.fill("#userName","Jesus")
        await page.fill("#userEmail","Jesus@example.com")
        await sleep(3000);
    });
    

    test('Hola mundo 2', async () => {

        const browsers=await chromium.launch({
            headless: false,
        })

        const context=await browsers.newContext();
        const page=await context.newPage();



        await page.goto('https://demoqa.com/text-box');
        await expect(page).toHaveTitle(/DEMOQA/);
        await expect(page).toHaveURL(/.*text-box/);
        // await page.locator("#userName").fill("Jesus")
        await page.fill("#currentAddress","Demo Direccion")
        await page.fill("#permanentAddress","Direccion dos")
        await page.click("#submit");
        await sleep(3000);
    });
});//describe