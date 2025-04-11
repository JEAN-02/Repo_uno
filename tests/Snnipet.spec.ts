import { test, expect, chromium } from '@playwright/test';
test.describe('Prueba del Snippet', () => {

const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};


    test('Snnipet', async () => {
        const browsers=await chromium.launch({});
        const context=await browsers.newContext();
        const page=await context.newPage();

        await page.goto('https://demoqa.com/text-box');
        await expect(page).toHaveTitle(/DEMOQA/);
        await expect(page).toHaveURL(/.*text-box/);
        await page.fill("#userName","Jesus")
        await sleep(3000);
        console.log('Termino la prueba');
    });
});