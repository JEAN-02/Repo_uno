import { test, expect, chromium } from '@playwright/test';
import { PTS } from './Funciones';

test.describe('Page Object Model', () => {
    // test.use({
    //     viewport: { width: 1900, height: 800 },
    // });

    const sleep = (ms: number = 5000): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    test('POM UNO', async () => {
        const browsers = await chromium.launch({
            headless: false,
        });

        const context = await browsers.newContext();
        const page = await context.newPage();
        const f = new PTS(page);

        await f.openUrl("https://demoqa.com/text-box");
        await expect(page).toHaveTitle(/DEMOQA/);
        await expect(page).toHaveURL(/.*text-box/);
        await page.fill("#userName", "Jesus");
        await page.fill("#userEmail", "Jesus@example.com");
        await f.tiempo(2000);
        console.log('Demo de un PO')
        await browsers.close(); // Cierra el navegador después de la prueba
    });
});