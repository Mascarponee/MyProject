"use strict";
var protractor_1 = require("protractor");
describe('Test the protractor demo', function () {
    var operator = protractor_1.element(protractor_1.by.model('operator'));
    var firstInputfield = protractor_1.element(protractor_1.by.model('first'));
    var secondInputfield = protractor_1.element(protractor_1.by.model('second'));
    var operatorAddition = operator.element(protractor_1.by.css('[value="ADDITION"]'));
    var operatorDivision = operator.element(protractor_1.by.css('[value="DIVISION"]'));
    var operatorMultiplication = operator.element(protractor_1.by.css('[value="MULTIPLICATION"]'));
    var operatorSubtraction = operator.element(protractor_1.by.css('[value="SUBTRACTION"]'));
    var operatorModulo = operator.element(protractor_1.by.css('[value="MODULO"]'));
    var button = protractor_1.element(protractor_1.by.id('gobutton'));
    var latest = protractor_1.element(protractor_1.by.binding('latest'));
    var resultTimestampfirstRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(0).column('result.timestamp'));
    var resultTimestampsecondRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(1).column('result.timestamp'));
    var resultFirstfirstRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(0).column('result.first'));
    var resultFirstsecondRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(1).column('result.first'));
    var resultOperatorfirstRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(0).column('result.operator'));
    var resultOperatorsecondRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(1).column('result.operator'));
    var resultSecondfirstRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(0).column('result.second'));
    var resultsSecondsecondRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(1).column('result.second'));
    var resultValuefirstRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(0).column('result.value'));
    var resultValuesecondRow = protractor_1.element(protractor_1.by.repeater('result in memory').row(1).column('result.value'));
    beforeEach(function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    });
    afterEach(function () {
        console.log('Test finished');
    });
    describe('When it enters the page', function () {
        it('should be the correct page', function () {
            expect(protractor_1.browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        });
        it('should check the title', function () {
            expect(protractor_1.browser.getTitle()).toBe('Super Calculator');
        });
    });
    describe('When testing the calculator', function () {
        describe('When Using single calculations', function () {
            it('should add two numbers, use addition and check the result value of the first line', function () {
                firstInputfield.sendKeys('5');
                operatorAddition.click();
                secondInputfield.sendKeys('3');
                button.click();
                expect(latest.getText()).toEqual('8');
            });
            it('should add two numbers,use division and check the result value of the first line', function () {
                firstInputfield.sendKeys('10');
                operatorDivision.click();
                secondInputfield.sendKeys('2');
                button.click();
                expect(latest.getText()).toEqual('5');
            });
            it('should add two numbers,use multiplication and check the result value of the first line', function () {
                firstInputfield.sendKeys('25');
                operatorMultiplication.click();
                secondInputfield.sendKeys('7');
                button.click();
                expect(latest.getText()).toEqual('175');
            });
            it('should add two numbers,use subtraction and check the result value of the first line', function () {
                firstInputfield.sendKeys('0');
                operatorSubtraction.click();
                secondInputfield.sendKeys('10');
                button.click();
                expect(latest.getText()).toEqual('-10');
            });
            it('should add two numbers,use modulo and check the result value of the first line', function () {
                firstInputfield.sendKeys('5000');
                operatorModulo.click();
                secondInputfield.sendKeys('80');
                button.click();
                expect(latest.getText()).toEqual('40');
            });
        });
        describe('When using multiple calculations', function () {
            it('should do different operations in one session and check the result for the latest', function () {
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
        });
        it('should test values from  ngRepeat', function () {
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
            resultTimestampfirstRow.getText().then(function (args) {
                console.log(args);
            });
            resultTimestampsecondRow.getText().then(function (args) {
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
        });
    });
});
