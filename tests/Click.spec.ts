import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1000;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

// var myArray=['Jesus','Jesus@prueba.com','SuperSecretPassword!'];
// var rand = myArray[(Math.random() *myArray.length) | 0]
// console.log(rand)
test.describe('Acciones click', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        //Mouse over
        // await f.openUrl("https://playwright.dev/docs/codegen");
        // await f.Validar_titulo("Test Generator | Playwright");
        // await f.Validar_URL("https://playwright.dev/docs/codegen");
        // await f.Validar_Texto("//h1[contains(.,'Test generator')]", "Test", tg);
        // await f.scroll(0, 200, tg);
        // console.log('Cargada la base la Base');

        //Opciones click
        // await f.openUrl("https://demoqa.com/buttons");
        // await f.Validar_titulo("DEMOQA");
        // await f.Validar_URL("https://demoqa.com/buttons");
        // await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Buttons')]", "Buttons", tg);
        // await f.scroll(0, 200, tg);
        // console.log('Cargada la base');

        //Drag and Drop
        await f.openUrl("https://demoqa.com/droppable");
        await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://demoqa.com/droppable");
        //await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Buttons')]", "Buttons", tg);
        await f.scroll(0, 200, tg);
        console.log('Cargada la base la Base');
    });

    // test('Mouse Over', async () => {
    //     await f.mouse_over("//a[@href='#'][contains(.,'Node.js')]",tg)
    //     await f.tiempo(tg);
    //     await f.click("//a[@href='/python/docs/codegen'][contains(.,'Python')]",tg)
    //     await f.tiempo(3000);
    // })

    // test('Opciones Click', async () => {
    // await f.click_texto("Click Me",tg)
    // await f.click_derecho_texto("Right Click Me",tg)
    // await f.dobleClick_texto("Double Click Me",tg)
    // });
    

    test.only('Drag and Drop', async () => {
        await f.drag_drop("//div[contains(@id,'draggable')]","(//div[@class='drop-box ui-droppable'][contains(.,'Drop here')])[1]",tg)
        await f.tiempo(tg);
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
