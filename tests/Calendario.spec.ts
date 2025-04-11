import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1500;
let x: number = 0;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;
let archivo: string;
archivo="C:/Users/jesus/Desktop/Playwright/tests/archivos/Imagen de WhatsApp 2024-01-21 a las 20.15.51_73805f66.jpg"

var myArray=['Jesus','Jesus@prueba.com','SuperSecretPassword!','hola','jto'];
var rand = myArray[(Math.random() *myArray.length) | 0]

test.describe('Calendarios', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

       
        await f.openUrl("https://demoqa.com/automation-practice-form");
        //await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://demoqa.com/automation-practice-form");
        //await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Buttons')]", "Buttons", tg);
        await f.scroll(0, 200, tg);
        console.log('Cargada la base la Base');
    });


    // test('calendarios click', async () => {
    //     await f.scroll(0,200)
    //     await f.tiempo(tg)
    //     await f.click("//input[contains(@id,'dateOfBirthInput')]",tg);
    //     await f.click("//div[@class='react-datepicker__day react-datepicker__day--023'][contains(.,'23')]",tg);
    // });

    
    test('calendarios texto', async () => {
        await f.scroll(0,400)
        await f.tiempo(tg)
        await f.texto_validar("//input[contains(@id,'userNumber')]","1122334455",tg)
        await f.Tab("//input[contains(@id,'userNumber')]",tg)
        //await f.Tab("//div[@class=' css-1hwfws3'][contains(.,'Select State')]",tg)
        await f.click("//input[contains(@id,'dateOfBirthInput')]",tg);
        await f.click("//div[@class='react-datepicker__day react-datepicker__day--002 react-datepicker__day--outside-month'][contains(.,'2')]",tg);
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
