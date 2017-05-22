import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

class HomePage {
    url: string = browser.baseUrl;

    inputField = element(by.id("query"));

    getUrl() {
        browser.get(this.url)
    };

    clickOnTopic(){
        
    };
};