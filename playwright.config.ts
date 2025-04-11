import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 40*1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries:1,
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers:1,
  //workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    headless: false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    viewport: {width: 1800, height:800},
    //trace: 'on-first-retry',
    browserName: 'chromium',
    trace: 'off',
    //'off'- No registrar rastro
    // 'on'- Registro de seguimiento para cada prueba
    // 'on-first-retry'- Registro de seguimiento para la primera prueba fallida y luego para cada prueba de retorno
    // 'off-all'- No registrar ningún seguimiento
    // 'on-first-retry-failed'- Registro de seguimiento para la primera prueba fallida y luego para cada prueba de retorno que falló
    // 'on-first-retry-failed-repeat'- Registro de seguimiento para la primera prueba fallida y luego para cada prueba de retorno que falló más de una vez
    // 'retain-on-failure'- Registre el seguimiento de cada prueba, pero eliminelo de las ejecuciones de prueba exitosas
    //video: 'on'
    //'off'
    //'on-first-retry-failed' Grabe video solo cuando vuelva a intentar una pruba por primera vez
    //'retain-on-failure' - Grabe video para cada prueba, pero elimine todos los videos de las ejecuciones de prueba exitosas

    // video: {
    //   dir: './videos',         // Carpeta donde se guardarán los videos
    //   size: { width: 1280, height: 720 }, // Tamaño del video (opcional)
    //   mode: 'on',              // 'on' | 'off' | 'retain-on-failure'
    // }
    

  },

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    //},
    //]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
