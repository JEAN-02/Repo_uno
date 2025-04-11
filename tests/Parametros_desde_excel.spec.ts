import dotenv from 'dotenv';
dotenv.config();

import { test, expect, chromium, Page } from '@playwright/test';
import { PTS } from './Funciones';


let tg: number = 500;
let x: number = 0;
let f: PTS;  // 🔹 Se declara correctamente
let page: Page;
let browser: any;
let context: any;
let archivo: string;
archivo="C:/Users/jesus/Desktop/Playwright/tests/archivos/Imagen de WhatsApp 2024-01-21 a las 20.15.51_73805f66.jpg"

var myArray=['Jesus','Carranza','Jesus@prueba.com','Male'];
var rand = myArray[(Math.random() *myArray.length) | 0]
let datos=['Jesus','Carranza','Jesus@prueba.com','Male'];
test.describe('Parametros desde excel', () => {

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

var XL=require("xlsx");
var libro=XL.readFile("C:/Users/jesus/Desktop/Playwright/tests/archivos/datos.xlsx")
let datos_xl=libro.SheetNames;
//console.log(datos_xl)
const hoja= datos_xl[0];
const excel=XL.utils.sheet_to_json(libro.Sheets[hoja])
    //console.log(excel)
    //for(const fila of excel)
    //{
    //    console.log(fila[name])
    //    console.log(fila[email])
    //}
   


    test.only('Parametros por excel', async () => {
        console.log(process.env)
        for(const fila of excel){
        await f.texto_validar("//input[contains(@id,'firstName')]",fila['name'], tg);
        await f.texto_validar("//input[contains(@id,'userEmail')]",fila['email'], tg);
        await f.texto_validar("//input[contains(@id,'lastName')]",fila['ap'], tg);
        await f.texto_validar("//input[contains(@id,'userNumber')]",fila['tel'].toString(), tg);
        if(fila['gen'].toLowerCase()=="male"){
            await f.click("//label[@for='gender-radio-1'][contains(.,'Male')]",tg)
            await f.tiempo(3000)
        }
        else if(fila['gen'].toLowerCase()=="female"){
            await f.click("//label[@for='gender-radio-2'][contains(.,'Female')]",tg)
            await f.tiempo(3000)
        }
        await f.openUrl("https://demoqa.com/automation-practice-form");
    }
    })
    


    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();  // 🔹 Se cierra aquí correctamente
        console.log('Despues de las pruebas test');
    });
});
