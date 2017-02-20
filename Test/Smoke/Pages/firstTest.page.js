"use strict";
var protractor_1 = require("protractor");
module.exports = new CreatePage;
var CreatePage = (function () {
    function CreatePage() {
        this.button = protractor_1.element(protractor_1.by.id('gobutton'));
        this.latest = protractor_1.element(protractor_1.by.binding('latest'));
        this.operator = protractor_1.element(protractor_1.by.model('operator'));
        this.firstInputfield = protractor_1.element(protractor_1.by.model('first'));
        this.secondInputfield = protractor_1.element(protractor_1.by.model('second'));
        this.operatorAddition = this.operator.element(protractor_1.by.css('[value="ADDITION"]'));
        this.operatorDivision = this.operator.element(protractor_1.by.css('[value="DIVISION"]'));
        this.operatorMultiplication = this.operator.element(protractor_1.by.css('[value="MULTIPLICATION"]'));
        this.operatorSubtraction = this.operator.element(protractor_1.by.css('[value="SUBSTRACTION"]'));
        this.operatorModulo = this.operator.element(protractor_1.by.css('[value="MODULO"]'));
    }
    CreatePage.prototype.clickGO = function () {
        this.button.click();
    };
    CreatePage.prototype.enterFirstFieldValue = function (value) {
        this.firstInputfield.sendKeys(value);
    };
    CreatePage.prototype.enterSecondFieldValue = function (value) {
        this.secondInputfield.sendKeys(value);
    };
    CreatePage.prototype.getLatest = function () {
        return this.latest.getText();
    };
    CreatePage.prototype.chooseAddition = function () {
        this.operatorAddition.click();
    };
    CreatePage.prototype.chooseDivisionr = function () {
        this.operatorDivision.click();
    };
    CreatePage.prototype.chooseMultiplication = function () {
        this.operatorMultiplication.click();
    };
    CreatePage.prototype.chooseModulo = function () {
        this.operatorModulo.click();
    };
    return CreatePage;
}());
;
