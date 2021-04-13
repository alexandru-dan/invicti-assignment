import { binding, before, after } from "cucumber-tsflow";
import {AllPages} from "../pages";
import {Browser} from "../config";

@binding()
export class Hooks{
    public static browser : Browser = new Browser("chrome");
    public allPages : AllPages = new AllPages(Hooks.browser);
    @before()
    public async beforeAllScenarios(){

    }

    @after("exitCriteria")
    public async afterScenario(){
        await this.allPages.dispose();
    }
}
