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

       
        await f.openUrl("https://validaciones.rodrigovillanueva.com.mx/Form1.html");
        //await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://validaciones.rodrigovillanueva.com.mx/Form1.html");
        //await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Buttons')]", "Buttons", tg);
        await f.scroll(0, 200, tg);
        console.log('Cargada la base la Base');
    });

for(x=1;x<=5;x++){
    test(`Combo numero ${x}`, async ()=>{
        await f.texto_validar("//input[contains(@id,'nombre')]","Jesus",tg)
        await f.texto_validar("//input[contains(@id,'apellidos')]","Carranza",tg)
        await f.texto_validar("//input[contains(@id,'tel')]","1122334455",tg)
        await f.texto_validar("//input[contains(@id,'email')]",rand,tg)
        await f.texto_validar("//input[contains(@id,'direccion')]","Calle 19 colonia hola",tg)
        await page.click("//button[@type='submit'][contains(.,'Enviar')]")
    });
    }

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
