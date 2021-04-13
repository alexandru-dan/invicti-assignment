import { binding, when} from 'cucumber-tsflow';
import {readTestData} from "../config";
import {AllPages} from "../pages";
import {Hooks} from "./Hooks";

@binding()
export class LoginSteps{
    private allPages : AllPages = new AllPages(Hooks.browser);

    @when("the user enters username {string} and password {string} and clicks {string} on login page")
    public async theuserentersusernameandpassword(username : string, password : string, button : string){
        const userField : string = this.allPages.loginPage.readFromFile("Username", "InputFields");
        const passField : string = this.allPages.loginPage.readFromFile("Password", "InputFields");
        const buttonId : string = this.allPages.loginPage.readFromFile(button,"Buttons");
        await this.allPages.browser.findElement(userField).sendKeys(readTestData(username));
        await this.allPages.browser.findElement(passField).sendKeys(readTestData(password));
        await this.allPages.browser.findElement(buttonId).click();
    }
}
