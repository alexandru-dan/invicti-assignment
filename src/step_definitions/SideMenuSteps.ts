import {binding, then, when} from "cucumber-tsflow";
import {expect} from "chai";
import {AllPages} from "../pages";
import {Hooks} from "./Hooks";

@binding()
export class SideMenuSteps{
    public allPages : AllPages = new AllPages(Hooks.browser);
    elements : any;

    @when('the user checks {string} menu elements on side menu')
    public async theusercheckstringelements(string : string){
        const optionElement : string = this.allPages.sideMenuPage.readFromFile(string,"Elements");
        let submenu : string = "";
        if(string.includes("Sub")){
            submenu = "Sub";
        }
        this.elements = await this.allPages.sideMenuPage.optionsFromSideMenu(optionElement, string, submenu);
    }

    @then('there should be displayed {string} options on side menu')
    public async thereshouldbedisplayedstringoptions(string : string){
        await expect(this.elements.toString()).equals(string);
    }
}
