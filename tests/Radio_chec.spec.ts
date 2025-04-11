import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';

let tg: number = 1500;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;

test.describe('Ejemplo de Radio y checkbox', () => {

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test.beforeAll(async () => {
        console.log('Inicia la base del test');
        browser = await chromium.launch({});
        context = await browser.newContext();
        page = await context.newPage();
        f = new PTS(page);  // 🔹 Se asigna correctamente

        await f.openUrl("https://validaciones.rodrigovillanueva.com.mx/Radios_Ok.html");
        await f.Validar_titulo("Formulario de Ejemplo");
        await f.Validar_URL("https://validaciones.rodrigovillanueva.com.mx/Radios_Ok.html");
        //await f.Validar_Texto("//input[contains(@id,'campo1')]", "1", tg);
        await f.scroll(0, 600, tg);
        console.log('Termina la Base');
    });

    test('Radio y Checkbox', async () => {
        let ap:string = ""
        let email:string=""
        let tel:string=""
        let dir:string=""

        await f.texto_try("//input[contains(@id,'campo1')]","Jesus",tg)
        //Condicionar
        const val=await f.valor_campo("//input[contains(@id,'campo1')]",tg)
        if (val.toLowerCase() == "jose"){
            ap="Gu"
            
            tel="55555555"
        }else if(val.toLowerCase() == "jesus"){
            ap="CARR"
        
            tel="4444444"
        }
        await f.texto_validar("//input[contains(@id,'campo2')]",tel,tg)
        await f.tiempo(tg)

        
    // //Checkbox
    // //para click normal
    //     await f.click("//input[contains(@id,'opcion1')]",tg)
    //     await f.tiempo(tg)

    
    // //Verifica el campo y pasa a click
         await f.check("//input[contains(@id,'opcionB')]",tg)
    //     await f.tiempo(tg)
    
    //Valida el valor dentro del campo despues de la funcion f.check
        await f.validar_check("//input[contains(@id,'opcionB')]")
        await f.tiempo(tg)

    //Radio
    //verifica el campo y pasa a click
        await f.check("//input[contains(@id,'opcion2')]",tg)
    })


    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
