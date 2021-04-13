import {binding, when} from "cucumber-tsflow";
import {AllPages} from "../pages";
import {Hooks} from "./Hooks";

@binding()
export class NavigationMenuSteps {
    public allPages : AllPages = new AllPages(Hooks.browser);

    @when('the user click {string} element on navigation menu page')
    public async whentheuserclickstringelement(element  : string){
        const elementId : string = this.allPages.navigationPage.readFromFile(element, "Elements");
        await this.allPages.browser.findElement(elementId).click();
    }
}
