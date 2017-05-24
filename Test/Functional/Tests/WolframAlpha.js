"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var WolframAlphaFunctions = require("../Pages/pageFunctions/WolframAlphafunctions.js");
var wolframAlphaFunctions = new WolframAlphaFunctions();
describe('WolframAlpha Testing', function () {
    beforeEach(function () {
        wolframAlphaFunctions.getUrl();
    });
    describe('Home Page', function () {
        xit('Should be the correct URL', function () {
            expect(protractor_1.browser.getCurrentUrl()).toBe(protractor_1.browser.baseUrl);
        });
        it('it should give input to the searched topic', function () {
            wolframAlphaFunctions.enterDataAndApply("acid");
        });
    });
});
