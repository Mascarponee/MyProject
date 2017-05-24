"use strict";
var protractor_1 = require("protractor");
var WolframAlphaLocators_js_1 = require("../pageLocators/WolframAlphaLocators.js");
var WolframAlphaFunctions = (function () {
    function WolframAlphaFunctions() {
        this.url = protractor_1.browser.baseUrl;
    }
    WolframAlphaFunctions.prototype.getUrl = function () {
        protractor_1.browser.get(this.url);
        protractor_1.browser.waitForAngular();
    };
    ;
    /**
     * Enters the given string into the input field, clicks on the submit button and checks if the view is present
     * @param text
     */
    WolframAlphaFunctions.prototype.enterDataAndApply = function (text) {
        WolframAlphaLocators_js_1.inputField.sendKeys(text);
        WolframAlphaLocators_js_1.submitButton.click();
        protractor_1.browser.waitForAngular();
        expect(WolframAlphaLocators_js_1.inputView.isPresent()).toBe(true);
        // expect(inputView.isDisplayed()).toBe(true);
    };
    ;
    /**
     * Clicks on a Topic and checks if the correct topic is loaded
     * @param topicClass
     * @param topicText
     */
    WolframAlphaFunctions.prototype.clickOnTopic = function (topicClass, topicText) {
        protractor_1.element(protractor_1.by.cssContainingText(topicClass, topicText)).click();
    };
    ;
    return WolframAlphaFunctions;
}());
;
module.exports = WolframAlphaFunctions;
