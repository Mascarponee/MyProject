"use strict";
var protractor_1 = require("protractor");
var CreatePage = require('./Pages/firstTest.page.js');
describe('Test the protractor demo', function () {
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
                CreatePage.enterFirstFieldValue('5');
                CreatePage.chooseAddition();
                CreatePage.enterSecondFieldValue('3');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('8'));
            });
            it('should add two numbers,use division and check the result value of the first line', function () {
                CreatePage.enterFirstFieldValue('10');
                CreatePage.chooseDivision();
                CreatePage.enterSecondFieldValue('2');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('5'));
            });
            it('should add two numbers,use multiplication and check the result value of the first line', function () {
                CreatePage.enterFirstFieldValue('25');
                CreatePage.chooseMultiplication();
                CreatePage.enterSecondFieldValue('7');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('125'));
            });
            it('should add two numbers,use subtraction and check the result value of the first line', function () {
                CreatePage.enterFirstFieldValue('0');
                CreatePage.chooseSubstraction();
                CreatePage.enterSecondFieldValue('10');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('-10'));
            });
            it('should add two numbers,use modulo and check the result value of the first line', function () {
                CreatePage.enterFirstFieldValue('5000');
                CreatePage.chooseModulo();
                CreatePage.enterSecondFieldValue('80');
                CreatePage.clickGO();
                expect(CreatePage.getLatest().toEqual('40'));
            });
        });
        describe('When using multiple calculations', function () {
            it('should do different operations in one session and check the result for the latest', function () {
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
        it('should test values from  ngRepeat', function () {
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
