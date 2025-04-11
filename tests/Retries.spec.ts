import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1000;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

var myArray=['Jesus.com','Jesus@prueba.com','jes.mx','jose@prueba.com'];
var rand = myArray[(Math.random() *myArray.length) | 0]

console.log(rand)

test.describe('Page Object Model', () => {

    const sleep = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        await f.openUrl("https://validaciones.rodrigovillanueva.com.mx/Form1.html");
        await f.Validar_titulo("Formulario de Ejemplo");
        await f.Validar_URL("https://validaciones.rodrigovillanueva.com.mx/Form1.html");
        await f.Validar_Texto("//a[@href='https://rodrigovillanueva.com.mx/']", "Home", tg);
        await f.scroll(0, 600, tg);
        console.log('Termina la Base');
    });

    test('Retries', async()=>{
        await f.texto_try("//input[contains(@id,'nombre')]","Jesus",tg)
        await f.texto_try("//input[contains(@id,'apellidos')]","Carranza",tg)
        await f.texto_try("//input[contains(@id,'tel')]","5516878787",tg)
        await f.texto_validar("//input[contains(@id,'email')]",rand,tg)
        await f.tiempo(tg);
        await f.texto_try("//input[contains(@id,'direccion')]","calle 15 lote 38",tg)
        await f.click("//button[@type='submit'][contains(.,'Enviar')]",tg)
        await f.tiempo
        await f.validar_texto("//div[contains(@id,'flashMessage')]","formulario",tg)

    })



    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
