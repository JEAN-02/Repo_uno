import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1000;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

test.describe('Copiar y pegar', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        //Copiar y opegar
        await f.openUrl("https://demoqa.com/text-box");
        await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://demoqa.com/text-box");
        //await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Buttons')]", "Buttons", tg);
        await f.scroll(0, 200, tg);
        console.log('Cargada la base la Base');
    });

    test('copiar input', async () => {
        await f.texto_validar("//input[contains(@id,'userName')]","Jesus",tg)
        await f.copiar_input("//input[contains(@id,'userName')]", tg);
        await f.pegar_input("//textarea[contains(@id,'currentAddress')]", tg);
    });

    test.only('Copiar texto',async () => {
        await f.copiar_texto("//h1[@class='text-center'][contains(.,'Text Box')]", "//textarea[contains(@id,'currentAddress')]",tg);
        await sleep(2000);
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
