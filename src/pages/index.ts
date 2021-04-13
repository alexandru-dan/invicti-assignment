import {LoginPage} from "./LoginPage";
import {NavigationMenuPage} from "./NavigationMenuPage";
import {Browser} from "../config";
import {MainPage} from "./MainPage";
import {SideMenuPage} from "./SideMenuPage";

export {
    LoginPage,
    NavigationMenuPage,
    MainPage,
    SideMenuPage
}

export class AllPages {
    public loginPage : LoginPage;
    public navigationPage : NavigationMenuPage;
    public mainPage : MainPage;
    public sideMenuPage : SideMenuPage

    constructor(public browser : Browser) {
        this.loginPage = new LoginPage(browser);
        this.navigationPage = new NavigationMenuPage(browser);
        this.mainPage = new MainPage(browser);
        this.sideMenuPage = new SideMenuPage(browser);
    }

    public async dispose(): Promise<void> {
        await this.browser.close();
    }
}
