import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

module.exports = new CreatePage;

class CreatePage {

    constructor(){};

    button = element(by.id('gobutton'));
    latest = element(by.binding('latest'));
    operator = element(by.model('operator'));
    firstInputfield = element(by.model('first'));
    secondInputfield = element(by.model('second'));
    operatorAddition = this.operator.element(by.css('[value="ADDITION"]'));
    operatorDivision = this.operator.element(by.css('[value="DIVISION"]'));
    operatorMultiplication = this.operator.element(by.css('[value="MULTIPLICATION"]'));
    operatorSubtraction = this.operator.element(by.css('[value="SUBSTRACTION"]'));
    operatorModulo = this.operator.element(by.css('[value="MODULO"]'));

    clickGO() {
        this.button.click();
    }
    enterFirstFieldValue(value) {
        this.firstInputfield.sendKeys(value);
    }
    enterSecondFieldValue(value) {
        this.secondInputfield.sendKeys(value);
    }
    getLatest() {
        return this.latest.getText();
    }
    chooseAddition(){
        this.operatorAddition.click();
    }
    chooseDivision(){
        this.operatorDivision.click();
    }
    chooseMultiplication(){
        this.operatorMultiplication.click();
    }
    chooseSubstraction(){
        this.operatorSubtraction.click();
    }
    chooseModulo(){
        this.operatorModulo.click();
    }
};
