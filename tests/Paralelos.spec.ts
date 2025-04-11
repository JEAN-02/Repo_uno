import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1000;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;
let archivo: string;
archivo="C:/Users/jesus/Desktop/Playwright/tests/archivos/Imagen de WhatsApp 2024-01-21 a las 20.15.51_73805f66.jpg"

test.describe('Paralelos', () => {

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
        //await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://demoqa.com/text-box");
        //await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Buttons')]", "Buttons", tg);
        await f.scroll(0, 200, tg);
        console.log('Cargada la base la Base');
    });

    test(' Datos uno', async () => {
        await f.texto_validar("//input[contains(@id,'userName')]","jesus",tg)
    });

    test(' Datos dos', async () => {
        await f.texto_validar("//textarea[contains(@id,'currentAddress')]","Carranza",tg)
    });

    test(' Datos tres', async () => {
        await f.texto_validar("//input[contains(@id,'userEmail')]","jesus@prueba.com", tg);
    });

    test(' Datos cuatro', async () => {
        await f.texto_validar("//textarea[contains(@id,'permanentAddress')]","Calle 18 colonia hola", tg);
    });

    // test('calencarios click', async () => {
    //     await f.scroll(0,200)
    //     await f.tiempo(tg)
    //     await f.click("//button[contains(@id,'submit')]",tg);
    //     await f.click("//button[contains(@id,'submit')]",tg);
    // });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
