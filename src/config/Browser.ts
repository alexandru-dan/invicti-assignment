import 'chromedriver';
import {Builder, By, promise, WebDriver, WebElement, WebElementPromise} from "selenium-webdriver";

export class Browser {

    private readonly driver: WebDriver;
    public constructor(private browserName : string) {
        this.driver = new Builder().forBrowser(browserName).build();
        this.driver.manage().window().maximize();
    }

    public async navigate(url: string): Promise<void> {
        await this.driver.navigate().to(url);
    }

    public findElement(selector: string): WebElementPromise {
        return this.driver.findElement(By.css(selector));
    }

    public findElements(selector : string) : promise.Promise<WebElement[]>{
        return this.driver.findElements(By.css(selector));
    }

    public getDriver(){
        return this.driver;
    }

    public async close(): Promise<void> {
        await this.driver.quit();
    }

    public async opens(): Promise<void>{
        await new Browser("chrome");
    }

}
