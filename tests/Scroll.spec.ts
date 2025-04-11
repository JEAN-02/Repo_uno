import { test, expect, chromium } from '@playwright/test';
import { PTS } from './Funciones';

let tg:number=1500
test.describe('Page Object Model', () => {
    // test.use({
    //     viewport: { width: 1900, height: 800 },
    // });

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test('Scroll', async () => {
        const browsers = await chromium.launch({
            //headless: false,
        });

        const context = await browsers.newContext();
        const page = await context.newPage();
        const f = new PTS(page);

        await f.openUrl("https://demoqa.com/text-box/");
        // await expect(page).toHaveTitle(/DEMOQA/);
        // await expect(page).toHaveURL(/.*text-box/);
        // await page.locator("#UserName"),fill("Jesus");

       
        await f.openUrl("https://demoqa.com/text-box");
        await f.Validar_titulo("DEMOQA");
        await f.Validar_URL("https://demoqa.com/text-box");
        await f.Validar_Texto("//h1[@class='text-center'][contains(.,'Text Box')]","Box",tg)
        await f.scroll(0, 300,3000);
        //await page.fill("//input[contains(@id,'userName')]","Jesus")

        await f.scroll(0, 600,tg);
        await f.texto_validar("#userName","Jesus",tg)
        await f.texto_validar("//input[contains(@id,'userEmail')]","Jesus@prueba.com",tg)
        await f.tiempo(tg);
        await browsers.close(); // Cierra el navegador después de la prueba
    });
});