import { expect, Locator, Page, selectors } from '@playwright/test';

const tie = 1000;

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class PTS {
    readonly page: Page;

    constructor(page: Page) {  // 🔹 Corregido "construtor" -> "constructor"
        this.page = page;
    }

    async open() {
        await this.page.goto('https://demoqa.com/text-box');
    }

    async openUrl(url: string, tiempo: number = tie) {  // 🔹 Agregado tipo `string` a `url`
        await this.page.goto(url);
        await sleep(tiempo);
    }

    async tiempo(tiempo: number = tie) {  // 🔹 Agregado tipo `number` a `tiempo`
        await sleep(tiempo);
    }

    async scroll(x: number, y: number, tiempo: number = tie) {
        await this.page.mouse.wheel(x, y);
        await sleep(tiempo);
    }
    async Validar_titulo(titulo:string,tiempo: number = tie) {
        await expect(this.page).toHaveTitle(new RegExp(titulo));
        await sleep(tiempo);
    }
    async Validar_URL(url: string,tiempo: number = tie) {
        await expect(this.page).toHaveURL(url);
        await sleep(tiempo);
    }
    async Validar_Texto(selector:string,val:string,tiempo:number=tie){
        const locator = this.page.locator(selector);
        await expect(locator).toContainText(val);
        await sleep(tiempo);
    }
    
    async validar_texto(selector:string,val:string,tiempo:number=tie){
        const locator = this.page.locator(selector);
        await expect(locator).toContainText(val);
        await sleep(tiempo);
    }

    async valor_texto(selector:string,tiempo:number=tie){
        const value = await this.page.locator(selector).allInnerTexts()
        await sleep(tiempo)
        return value;
    }

    async texto_validar(selector:string,val:string,tiempo=tie){
        const valor = this.page.locator(selector);
        await expect(valor).toBeVisible();
        await expect(valor).toBeEnabled();
        await expect(valor).toBeEmpty();
       
        // if(valor != null){
        //     valor.fill(val)
        // }
        await valor?.focus();
        await valor?.fill(val)
        //await valor.fill(val)
        await sleep(tiempo)
    }

    async texto_try(selector: string,val: string,tiempo: number=tie){
        try{
            const valor = this.page.locator(selector);
            await expect(valor).toBeVisible();
            await expect(valor).toBeEnabled();
            await expect(valor).toBeEmpty();
            await valor?.focus();
            await valor?.fill(val)
            await sleep(tiempo)
        }catch(error:any){
            console.log("Campo con detalle"+ error.message)
        
        }
    }
    async click(selector:string,tiempo:number=tie){
        try{
            await this.page.locator(selector).click()
            await sleep(tiempo)
        }
        catch(error:any){
            console.log("Botón con detalle"+ error.message)
        }
    }

    async check(selector:string,tiempo:number=tie){
        try{
            await this.page.locator(selector).check()
            await sleep(tiempo)
        }
        catch(error:any){
            console.log("Checkbox con detalle"+ error.message)
        }
    }

    async validar_check(selector:string,tiempo:number=tie){
        try{
            const valor = this.page.locator(selector);
            expect(await valor.isChecked()).toBeTruthy()
            await sleep(tiempo)
        }
        catch(error:any){
            console.log("Checkbox con detalle \n"+ error.message)}
    }

    //Solo para campos de tipo input 
    async valor_campo(selector:string,tiempo:number=tie){
        const value= await this.page.locator(selector).inputValue();
        console.log("value");
        await sleep(tiempo)
        return value
    }

    async mouse_over(selector:string,tiempo:number=tie){
        const sel = await this.page.locator(selector)
        await sel.hover()
        await sleep(tiempo)
    }

    async click_texto(texto: string,tiempo:number=tie){
        const sel = await this.page.getByRole('button',{name:texto,exact:true})
        await sel.click();
        await sleep(tiempo)
    }

    async dobleClick_texto(texto:string ,tiempo:number=tie){
        const sel = await this.page.getByRole('button',{name:texto,exact:true})
        await sel.dblclick();
        await sleep(tiempo)
    }

    async click_derecho_texto(texto:string ,tiempo:number=tie){
        const sel = await this.page.getByRole('button',{name:texto,exact:true})
        await sel.click({button:'right'});
        await sleep(tiempo)
    }

    async drag_drop(ori:string,des:string,tiempo:number=tie){
        await this.page.locator(ori).dragTo(this.page.locator(des));
        await sleep(tiempo)
    }

    async copiar_input(selector:string,tiempo:number=tie){
        const sel = await this.page.locator(selector)
        await sel.press("Control+A")
        await sel.press("Control+C")
        console.log(sel);
        await sleep(tiempo)
    }
    async pegar_input(selector:string,tiempo:number=tie){
        const sel = await this.page.locator(selector)
        await sel.focus();
        await sel.press("Control+V")
        await sleep(tiempo)
    }

    async copiar_texto(selector:string,pegar:string,tiempo:number=tie){
        const value = await this.page.locator(selector).allInnerTexts()
        console.log(value)
        await sleep(tiempo)
        const val2 = await this.page.locator(pegar)
        await val2.fill(value[0])
        await sleep(tiempo)
    }

    async combo_value(selector: string,val:string,tiempo:number=tie){
        const cam = await this.page.locator(selector)
        await cam.selectOption(val)
        await sleep(tiempo)
    }

    async combo_Label(selector: string,val:string,tiempo:number=tie){
        const cam=await this.page.locator(selector)
        await cam.selectOption({label:val})
        await sleep(tiempo)
    }
    async combo_multiples(selector: string,arg:any=defaultValue ,tiempo:number=tie){
        const cam = await this.page.locator(selector)
        //const val=new Array();
        console.log(arg)
        await cam.selectOption(arg)
        await sleep(tiempo)

    }

    async Upload_file(selector: string,archivo:string,tiempo:number=tie){
        const sel = await this.page.locator(selector)
        await sel.setInputFiles(archivo)
        await sleep(tiempo)
    }

    async Mover_Upload_file(selector: string,tiempo:number=tie){
        const sel = await this.page.locator(selector)
        await sel.setInputFiles([]);
            await sleep(tiempo) 
    }

    async Tab(selector:string,tiempo:number=tie){
        const sel = await this.page.locator(selector)
        await sel.press("Tab")
        await sleep(tiempo)
    }

    //tomar pantalla
    //configuracion por confi

    async Pantalla(ruta:string,tiempo:number=tie){
        await this.page.screenshot({ path: ruta});
        await sleep(tiempo)
    }
    async Pantalla_completa(ruta:string,tiempo:number=tie){
        await this.page.screenshot({ path: ruta, fullPage:true });
        await sleep(tiempo)
    }

    async Pantalla_elemento(selector:string, ruta:string ,tiempo:number=tie){
        const sel = await this.page.locator(selector)
        await sel.screenshot({ path: ruta });
        await sleep(tiempo)
    }

    

}
