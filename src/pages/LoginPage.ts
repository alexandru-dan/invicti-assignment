import {readFromFile} from "../config";
import {Browser} from "../config";


export class LoginPage{

    private browser : Browser;
    constructor(browser : Browser){
        this.browser = browser;
    }

    public readFromFile(key : string, type : string){
        const className = this.getClassName().split("Page")[0] + "Locators";
        return readFromFile(className,type , key);
    }

    public getClassName(){
        return this.constructor.name;
    }

}
