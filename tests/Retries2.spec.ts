import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1500;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

var myArray=['Jesus','Jesus@prueba.com','SuperSecretPassword!'];
var rand = myArray[(Math.random() *myArray.length) | 0]
console.log(rand)
test.describe('Retries con while', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        await f.openUrl("https://the-internet.herokuapp.com/login");
        await f.Validar_titulo("The Internet");
        await f.Validar_URL("https://the-internet.herokuapp.com/login");
        await f.Validar_Texto("//h2[contains(.,'Login Page')]", "Login", tg);
        await f.scroll(0, 600, tg);
        console.log('Termina la Base');
    });

    test('Retries con While', async() => {
    var bandera=true
    do{
        var rand = myArray[(Math.random()* myArray.length) | 0]
        console.log(rand)
        await f.scroll(0,300,tg)

        await f.texto_validar("//input[contains(@id,'username')]","tomsmith",tg)
        await f.texto_validar("//input[contains(@id,'password')]",rand,tg)
        await f.click("//button[@class='radius'][contains(.,'Login')]",tg)
        const valor=await f.valor_texto("//div[@id='flash']")
        console.log("Primer bandera antes del if")
        console.log(bandera)
        console.log(valor[0].trim())//quitar los espacios con trim
        var texto=(valor[0].trim()).substring(0,25)
        console.log(texto)
        if(texto=="Your password is invalid!"){
            console.log("Entro en el de invalidad continua")
            bandera=true
            console.log(bandera)
        }
        if(texto!="Your password is invalid!"){
            console.log("Paso el password")
            bandera=false
            console.log(bandera)
            break
        }
    }while(bandera==true);
    });



    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
