import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import WolframAlphaFunctions = require('../Pages/pageFunctions/WolframAlphafunctions.js');


let wolframAlphaFunctions: WolframAlphaFunctions = new WolframAlphaFunctions();

describe('WolframAlpha Testing', () => {

    beforeEach(function () {
        wolframAlphaFunctions.getUrl();
    });
    describe('Home Page', () =>{
        xit('Should be the correct URL', ()=> {
            expect(browser.getCurrentUrl()).toBe(browser.baseUrl);
        });
        it('it should give input to the searched topic', () => {
            wolframAlphaFunctions.enterDataAndApply("acid");
        });
    });


});
