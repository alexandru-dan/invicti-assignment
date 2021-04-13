import {binding, given} from "cucumber-tsflow";
import {readTestData} from "../config";
import {AllPages} from "../pages";
import {expect} from "chai";
import {then} from "cucumber-tsflow/dist";
import {Hooks} from "./Hooks";

@binding()
export class CommonSteps{

    public allPages : AllPages = new AllPages(Hooks.browser);

    @given('the user accesses {string} page')
    public async givenUserAccessStringPage(url : string){
        await this.allPages.browser.navigate(readTestData(url));
    }

    @then('the user is redirected to {string} page')
    public async thentheuserisredirectedtologinpage(page : string){
        const link : string = await this.allPages.browser.getDriver().getCurrentUrl();
        await expect(link.toLowerCase()).contains(page.toLowerCase());
    }


}
