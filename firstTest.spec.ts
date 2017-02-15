import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

describe('Test the calculator application', () => {

    let firstInputfield = element(by.model('first'));
    let secondInputfield = element(by.model('second'));
    let operatorAddition = element(by.model('operator')).element(by.css('[value="ADDITION"]'));
    let operatorDivision = element(by.model('operator')).element(by.css('[value="DIVISION"]'));
    let operatorMultiplication = element(by.model('operator')).element(by.css('[value="MULTIPLICATION"]'));
    let operatorSubtraction = element(by.model('operator')).element(by.css('[value="SUBTRACTION"]'));
    let operatorModulo = element(by.model('operator')).element(by.css('[value="MODULO"]'));
    let button = element(by.id('gobutton'));
    let latest = element(by.binding('latest'));
    let resultTimestampfirstRow = element(by.repeater('result in memory').row(0).column('result.timestamp'));
    let resultTimestampsecondRow = element(by.repeater('result in memory').row(1).column('result.timestamp'));
    let resultFirstfirstRow = element(by.repeater('result in memory').row(0).column('result.first'));
    let resultFirstsecondRow = element(by.repeater('result in memory').row(1).column('result.first'));
    let resultOperatorfirstRow = element(by.repeater('result in memory').row(0).column('result.operator'));
    let resultOperatorsecondRow = element(by.repeater('result in memory').row(1).column('result.operator'));
    let resultSecondfirstRow = element(by.repeater('result in memory').row(0).column('result.second'));
    let resultsSecondsecondRow = element(by.repeater('result in memory').row(1).column('result.second'));
    let resultValuefirstRow = element(by.repeater('result in memory').row(0).column('result.value'));
    let resultValuesecondRow = element(by.repeater('result in memory').row(1).column('result.value'));

    beforeEach(function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
    });

    afterEach(function () {

        console.log('Test finished');
    });


    it('should be the correct page', () => {
        expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
    });

    it('should check the title', () => {
        expect(browser.getTitle()).toBe('Super Calculator');
    });

    it('should add two numbers, use addition and check the result value of the first line', () => {
        firstInputfield.sendKeys('5');
        operatorAddition.click();
        secondInputfield.sendKeys('3');
        button.click();
        expect(latest.getText()).toEqual('8');
    });
    it('should add two numbers,use division and check the result value of the first line', () => {
        firstInputfield.sendKeys('10');
        operatorDivision.click();
        secondInputfield.sendKeys('2');
        button.click();
        expect(latest.getText()).toEqual('5');
    });
    it('should add two numbers,use multiplication and check the result value of the first line', () => {
        firstInputfield.sendKeys('25');
        operatorMultiplication.click();
        secondInputfield.sendKeys('7');
        button.click();
        expect(latest.getText()).toEqual('175');
    });
    it('should add two numbers,use subtraction and check the result value of the first line', () => {
        firstInputfield.sendKeys('0');
        operatorSubtraction.click();
        secondInputfield.sendKeys('10');
        button.click();
        expect(latest.getText()).toEqual('-10');
    });
    it('should add two numbers,use modulo and check the result value of the first line', () => {
        firstInputfield.sendKeys('5000');
        operatorModulo.click();
        secondInputfield.sendKeys('80');
        button.click();
        expect(latest.getText()).toEqual('40');
    });
    it('should do different operations in one session and check the result for the latest', () => {
        firstInputfield.sendKeys('5');
        operatorAddition.click();
        secondInputfield.sendKeys('3');
        button.click();
        expect(latest.getText()).toEqual('8');
        firstInputfield.sendKeys('10');
        operatorDivision.click();
        secondInputfield.sendKeys('2');
        button.click();
        expect(latest.getText()).toEqual('5');
        firstInputfield.sendKeys('10');
        operatorMultiplication.click();
        secondInputfield.sendKeys('2');
        button.click();
        expect(latest.getText()).toEqual('20');
    });
    // xit('should test the expression for the first line', () => {
    //     element(by.model('first')).sendKeys('5');
    //     element(by.model('operator')).element(by.css('[value="ADDITION"]')).click();
    //     element(by.model('second')).sendKeys('3');
    //     element(by.id('gobutton')).click();
    //     element(by.cssContainingText('th', 'Expression')).getText().then((text) => {
    //         console.log(text);
    //     });
    //     element(by.cssContainingText('.ng-binding', '5')).getText().then((text) => {
    //         console.log(text);
    //     });
    //     element(by.cssContainingText('.ng-binding', '+')).getText().then((text) => {
    //         console.log(text);
    //     });
    //     element(by.cssContainingText('.ng-binding', '3')).getText().then((text) => {
    //         console.log(text);
    //     });
    // });

    it('should test values from  ngRepeat', () => {
        firstInputfield.sendKeys('5');
        operatorAddition.click();
        secondInputfield.sendKeys('3');
        button.click();
        expect(latest.getText()).toEqual('8');
        firstInputfield.sendKeys('10');
        operatorDivision.click();
        secondInputfield.sendKeys('2');
        button.click();
        expect(latest.getText()).toEqual('5');
        resultTimestampfirstRow.getText().then((args) => {
            console.log(args);
        });
        resultTimestampsecondRow.getText().then((args) => {
            console.log(args);
        });
        expect(resultFirstfirstRow.getText()).toEqual('10');
        expect(resultOperatorfirstRow.getText()).toEqual('/');
        expect(resultSecondfirstRow.getText()).toEqual('2');
        expect(resultValuefirstRow.getText()).toEqual('5');
        expect(resultFirstsecondRow.getText()).toEqual('5');
        expect(resultOperatorsecondRow.getText()).toEqual('+');
        expect(resultsSecondsecondRow.getText()).toEqual('3');
        expect(resultValuesecondRow.getText()).toEqual('8');

        // element(by.repeater('result in memory').row(0).column('result.first')).getText().then(function (args) {
        //     console.log(args);
        // });
        // element.all(by.repeater('result in memory').column('result.first')).getText().then(function (args) {
        //     console.log(args);
        // });
    });
});