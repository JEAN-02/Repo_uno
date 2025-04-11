import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1000;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

test.describe('Combo box', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        //Combo box
        await f.openUrl("https://demoqa.com/select-menu");
        await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://demoqa.com/select-menu");
        //await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Buttons')]", "Buttons", tg);
        await f.scroll(0, 200, tg);
        console.log('Cargada la base la Base');
    });

    // test('combo uno', async () => {
    //     await f.tiempo(2000)
    //     await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Linux",tg)
    //     await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Windows",tg)
    //     await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Mac",tg)
    //     await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Linux",tg)
    //     await f.tiempo(2000)
    // });

    test('combox Multiples', async () => {
        await f.click("//div[@class=' css-1hwfws3'][contains(.,'Select...')]",tg)
        await f.click("#react-select-4-option-0",tg)
        await f.click("#react-select-4-option-1",tg)
        await f.click("#react-select-4-option-2",tg)
    });

    test.only('Combox Miltiples dos', async () => {
        await f.click("//option[@value='saab'][contains(.,'Saab')]",tg)
        await f.combo_multiples("#cars",['volvo','audi','saab'],tg)
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
