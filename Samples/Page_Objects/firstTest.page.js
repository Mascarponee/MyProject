"use strict";
var protractor_1 = require("protractor");
var home_page = (function () {
    function home_page() {
    }
    home_page.prototype.enterFieldValue = function (value) {
        protractor_1.element(protractor_1.by.model('person.name')).sendKeys(value);
    };
    home_page.prototype.getDynamicText = function () {
        return protractor_1.element(protractor_1.by.binding('person.name')).getText();
    };
    home_page.prototype.clickContinue = function () {
        protractor_1.element(protractor_1.by.buttonText('CONTINUE')).click();
    };
    return home_page;
}());
;
module.exports = new home_page;
