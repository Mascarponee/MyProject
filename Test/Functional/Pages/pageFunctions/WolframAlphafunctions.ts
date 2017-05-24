import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { inputField, submitButton, inputView } from '../pageLocators/WolframAlphaLocators.js';

class WolframAlphaFunctions {
    url: string = browser.baseUrl;

    getUrl() {
        browser.get(this.url)
        browser.waitForAngular();
    };

/**
 * Enters the given string into the input field, clicks on the submit button and checks if the view is present
 * @param text 
 */
    enterDataAndApply(text:string){
        inputField.sendKeys(text);
        submitButton.click();
        browser.waitForAngular();
        expect(inputView.isPresent()).toBe(true);
        // expect(inputView.isDisplayed()).toBe(true);

    };
/**
 * Clicks on a Topic and checks if the correct topic is loaded
 * @param topicClass 
 * @param topicText 
 */
    clickOnTopic(topicClass: string, topicText: string) {
        element(by.cssContainingText(topicClass, topicText)).click();
    };
};

export = WolframAlphaFunctions;