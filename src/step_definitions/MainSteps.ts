import {binding, then, when} from "cucumber-tsflow/dist";
import {readTestData} from "../config";
import {expect} from "chai";
import {AllPages} from "../pages";
import {Hooks} from "./Hooks";
import {By, WebElement} from "selenium-webdriver";

@binding()
export class MainSteps{
    public allPages : AllPages = new AllPages(Hooks.browser);
    elements : any;
    @then('the user is redirected to {string} page and welcome message with {string} name appears on main page')
    public async thentheuserisredirectedtostringpageandwelcomemessagewithstringname(page : string, name : string){
        const link : string = await this.allPages.browser.getDriver().getCurrentUrl();
        name = readTestData(name);
        const hello : string = await this.allPages.browser.findElement("div.fl > h1").getText();
        await expect(link).contains(page.toLowerCase());
        await expect(hello.toLowerCase()).contains(name.toLowerCase());
    }

    @when('the user checks {string} list on main page')
    public async theusercheckstring(string : string){
        const elementId : string = this.allPages.mainPage.readFromFile(string,"Elements");
        const element : WebElement = await this.allPages.browser.findElement(elementId);
        const elementsW : WebElement[] = await element.findElements(By.css("*"));
        this.elements = elementsW.length;
    }

    @then('the feature contains {string} entries on main page')
    public async thefeaturecontainsstringentries(string2 : string){
        await expect(this.elements.toString()).equals(string2);
    }

}
