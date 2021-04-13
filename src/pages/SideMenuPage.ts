import {Browser, readFromFile} from "../config";
import {By, WebElement} from "selenium-webdriver";

export class SideMenuPage{

    private browser : Browser;
    constructor(browser : Browser) {
        this.browser = browser;
    }

    public readFromFile(key : string, type : string){
        const className = this.getClassName().split("Page")[0] + "Locators";
        return readFromFile(className,type , key);
    }

    public getClassName(){
        return this.constructor.name;
    }

    public async optionsFromSideMenu(selector : string, menu : string, submenu : string){
        if(submenu.length == 0){
            const elements : WebElement[] = await this.returnElement(selector);
            return elements.length;
        } else {
            const parrentName : string = menu.split(submenu)[1];
            const parrent : string = this.readFromFile(parrentName, "Elements");
            const elements : WebElement[] = await this.returnElement(parrent);
            let childsNumber : number = 0;
            for(var val of elements){
                let elements : WebElement[] = await val.findElements(By.css(selector));
                childsNumber += elements.length;
            }
            return childsNumber;
        }
    }

    public async returnElement(selector: string) {
        const element : WebElement = await this.browser.findElement(selector);
        return element.findElements(By.css("ul"));
    }
}
