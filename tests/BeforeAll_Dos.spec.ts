import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1500;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

test.describe('Page Object Model', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        await f.openUrl("https://demoqa.com/text-box");
        await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://demoqa.com/text-box");
        await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Text Box')]", "Box", tg);
        await f.scroll(0, 600, tg);
        console.log('Termina la Base');
    });

    test('BeforeAll', async () => { // .only es para ejecutar una sola prueba.
        await f.texto_validar("#userName", "Jesus", tg);
        await f.texto_validar("//input[contains(@id,'userEmail')]", "Jesus@prueba.com", tg);
        await f.tiempo(tg);
        // 🔹 No cerramos el navegador aquí, solo después de todas las pruebas
    });

    test('BeforeAll Dos', async () => {
        //await f.texto_validar("//input[contains(@id,'userEmail')]", "Jesus@prueba.com", tg);
        //await f.texto_validar("#userName", "Jesus", tg);
        await f.texto_validar("//textarea[contains(@id,'currentAddress')]", "Calle 5 colonia 19", tg);
        await f.texto_try("//textarea[contains(@id,'permanentAddress')]", "Calle 10 colonia 14 izt", tg);
        await f.tiempo(tg);
    });
    
    test('BeforeAll Tres', async () => {
        await page.click("//button[contains(@id,'submit')]")
        await f.tiempo(tg);
    });


    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
