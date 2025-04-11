import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1500;
let x: number = 0;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;
let archivo: string;
let pan:string;

var ranp = Math.ceil(Math.random() *1000);
archivo="C:/Users/jesus/Desktop/Playwright/tests/archivos/Imagen de WhatsApp 2024-01-21 a las 20.15.51_73805f66.jpg"

var myArray=['Jesus','Carranza','Jesus@prueba.com','Male'];
var rand = myArray[(Math.random() *myArray.length) | 0]
let datos=['Jesus','Carranza','Jesus@prueba.com','Male'];
pan="C:/Users/jesus/Desktop/Playwright/tests/archivos/img"+ranp+".png"
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

    test('Pantalla Screenshot', async () => {
        await f.scroll(0, 200)
        await f.tiempo(tg)
        await f.Upload_file("//input[contains(@id,'uploadPicture')]",archivo,tg)
        //await f.Pantalla(pan,tg)
        //await f.Pantalla_completa(pan,tg)
        await f.Pantalla_elemento("//input[contains(@id,'uploadPicture')]",pan,tg)
    })


    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
