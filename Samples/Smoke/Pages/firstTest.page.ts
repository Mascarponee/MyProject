import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

class CreatePage {
    //url: string = browser.baseUrl + "#/parameterTuningFileImport";

    button = element(by.id('gobutton'));
    latest = element(by.binding('latest'));
    operator = element(by.model('operator'));
    firstInputfield = element(by.model('first'));
    secondInputfield = element(by.model('second'));
    operatorAddition = this.operator.element(by.css('[value="ADDITION"]'));
    operatorDivision = this.operator.element(by.css('[value="DIVISION"]'));
    operatorMultiplication = this.operator.element(by.css('[value="MULTIPLICATION"]'));
    operatorSubtraction = this.operator.element(by.css('[value="SUBTRACTION"]'));
    operatorModulo = this.operator.element(by.css('[value="MODULO"]'));

    //goTo(): void {
        //browser.get(this.url);
    //}

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
    chooseAddition() {
        this.operatorAddition.click();
    }
    chooseDivision() {
        this.operatorDivision.click();
    }
    chooseMultiplication() {
        this.operatorMultiplication.click();
    }
    chooseSubstraction() {
        this.operatorSubtraction.click();
    }
    chooseModulo() {
        this.operatorModulo.click();
    }
    getTextForRepeaterElement(repeater: string, row: number, column: string) {
        return element(by.repeater(repeater).row(row).column(column)).getText();
    }
};

export = CreatePage;
