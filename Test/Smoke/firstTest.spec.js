"use strict";
var protractor_1 = require("protractor");
var CreatePage = require("./Pages/firstTest.page.js");
var createPage = new CreatePage();
describe('Test the protractor Calculator', function () {
    beforeEach(function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    });
    afterEach(function () {
        console.log('Test finished');
    });
    describe('When it enters the page', function () {
        it('it should be the correct page', function () {
            expect(protractor_1.browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        });
        it('it should check the title', function () {
            expect(protractor_1.browser.getTitle()).toBe('Super Calculator');
        });
    });
    describe('When calculating', function () {
        describe('When Using single calculations', function () {
            it('it should add two numbers, use addition and check the result value of the first line', function () {
                createPage.enterFirstFieldValue('5');
                createPage.chooseAddition();
                createPage.enterSecondFieldValue('3');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('8');
            });
            it('it should add two numbers,use division and check the result value of the first line', function () {
                createPage.enterFirstFieldValue('10');
                createPage.chooseDivision();
                createPage.enterSecondFieldValue('2');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('5');
            });
            it('it should add two numbers,use multiplication and check the result value of the first line', function () {
                createPage.enterFirstFieldValue('25');
                createPage.chooseMultiplication();
                createPage.enterSecondFieldValue('7');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('175');
            });
            it('it should add two numbers,use subtraction and check the result value of the first line', function () {
                createPage.enterFirstFieldValue('0');
                createPage.chooseSubstraction();
                createPage.enterSecondFieldValue('10');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('-10');
            });
            it('it should add two numbers,use modulo and check the result value of the first line', function () {
                createPage.enterFirstFieldValue('5000');
                createPage.chooseModulo();
                createPage.enterSecondFieldValue('80');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('40');
            });
        });
        describe('When using multiple calculations', function () {
            it('it should do different operations in one session and check the result for the latest', function () {
                createPage.enterFirstFieldValue('5');
                createPage.chooseAddition();
                createPage.enterSecondFieldValue('3');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('8');
                createPage.enterFirstFieldValue('10');
                createPage.chooseDivision();
                createPage.enterSecondFieldValue('2');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('5');
                createPage.enterFirstFieldValue('10');
                createPage.chooseMultiplication();
                createPage.enterSecondFieldValue('2');
                createPage.clickGO();
                expect(createPage.getLatest()).toEqual('20');
            });
        });
        it('it should test values from  ngRepeat', function () {
            createPage.enterFirstFieldValue('5');
            createPage.chooseAddition();
            createPage.enterSecondFieldValue('3');
            createPage.clickGO();
            expect(createPage.getLatest()).toEqual('8');
            createPage.enterFirstFieldValue('10');
            createPage.chooseDivision();
            createPage.enterSecondFieldValue('2');
            createPage.clickGO();
            expect(createPage.getLatest()).toEqual('5');
            createPage.getTextForRepeaterElement('result in memory', 0, 'result.timestamp').then(function (args) {
                console.log(args);
            });
            createPage.getTextForRepeaterElement('result in memory', 1, 'result.timestamp').then(function (args) {
                console.log(args);
            });
            protractor_1.browser.waitForAngular();
            expect(createPage.getTextForRepeaterElement('result in memory', 0, 'result.first')).toEqual('10');
            expect(createPage.getTextForRepeaterElement('result in memory', 0, 'result.operator')).toEqual('/');
            expect(createPage.getTextForRepeaterElement('result in memory', 0, 'result.second')).toEqual('2');
            expect(createPage.getTextForRepeaterElement('result in memory', 0, 'result.value')).toEqual('5');
            expect(createPage.getTextForRepeaterElement('result in memory', 1, 'result.first')).toEqual('5');
            expect(createPage.getTextForRepeaterElement('result in memory', 1, 'result.operator')).toEqual('+');
            expect(createPage.getTextForRepeaterElement('result in memory', 1, 'result.second')).toEqual('3');
            expect(createPage.getTextForRepeaterElement('result in memory', 1, 'result.value')).toEqual('8');
        });
    });
});
