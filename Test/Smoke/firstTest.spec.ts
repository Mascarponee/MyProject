import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

var CreatePage = require('./Pages/firstTest.page.js');

describe('Test the protractor demo', () => {

    let resultTimestampfirstRow = element(by.repeater('result in memory').row(0).column('result.timestamp'));
    let resultTimestampsecondRow = element(by.repeater('result in memory').row(1).column('result.timestamp'));
    // let resultFirstfirstRow = element(by.repeater('result in memory').row(0).column('result.first'));
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

    describe('When it enters the page', () => {
        xit('should be the correct page', () => {
            expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        });
        xit('should check the title', () => {
            expect(browser.getTitle()).toBe('Super Calculator');
        });
    });

    describe('When testing the calculator', () => {

        describe('When Using single calculations', () => {
            it('should add two numbers, use addition and check the result value of the first line', () => {
                CreatePage.enterFirstFieldValue('5');
                CreatePage.chooseAddition();
                CreatePage.enterSecondFieldValue('3');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('8'));
            });
            xit('should add two numbers,use division and check the result value of the first line', () => {
                CreatePage.enterFirstFieldValue('10');
                CreatePage.chooseDivision();
                CreatePage.enterSecondFieldValue('2');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('5'));
            });
            xit('should add two numbers,use multiplication and check the result value of the first line', () => {
                CreatePage.enterFirstFieldValue('25');
                CreatePage.chooseMultiplication();
                CreatePage.enterSecondFieldValue('7');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('125'));
            });
            xit('should add two numbers,use subtraction and check the result value of the first line', () => {
                CreatePage.enterFirstFieldValue('0');
                CreatePage.chooseSubstraction();
                CreatePage.enterSecondFieldValue('10');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('-10'));
            });
            xit('should add two numbers,use modulo and check the result value of the first line', () => {
                CreatePage.enterFirstFieldValue('5000');
                CreatePage.chooseModulo();
                CreatePage.enterSecondFieldValue('80');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('40'));
            });
        });

        describe('When using multiple calculations', () => {
            xit('should do different operations in one session and check the result for the latest', () => {
                CreatePage.enterFirstFieldValue('5');
                CreatePage.chooseAddition();
                CreatePage.enterSecondFieldValue('3');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('8'));
                CreatePage.enterFirstFieldValue('10');
                CreatePage.chooseDivision();
                CreatePage.enterSecondFieldValue('2');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('5'));
                CreatePage.enterFirstFieldValue('10');
                CreatePage.chooseMultiplication();
                CreatePage.enterSecondFieldValue('2');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('20'));
            });
        });


        xit('should test values from  ngRepeat', () => {
            CreatePage.enterFirstFieldValue('5');
            CreatePage.chooseAddition();
            CreatePage.enterSecondFieldValue('3');
            CreatePage.clickGO();
            expect(CreatePage.getLatest().toEqual('8'));
            CreatePage.enterFirstFieldValue('10');
            CreatePage.chooseDivision();
            CreatePage.enterSecondFieldValue('2');
            CreatePage.clickGO();
            expect(CreatePage.getLatest().toEqual('5'));
            resultTimestampfirstRow.getText().then((args) => {
                console.log(args);
            });
            resultTimestampsecondRow.getText().then((args) => {
                console.log(args);
            });
            expect(CreatePage.repeater('result in memory',0,'result.first').getText()).toEqual('10');
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