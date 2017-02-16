// https://www.youtube.com/watch?v=ln_jaC11SAA&t=1397s&list=PL_noPv5wmuO-mnEq8Sf0h43QRk-Gk2Cvb&index=7

import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

class home_page {

    enterFieldValue(value) {
        element(by.model('person.name')).sendKeys(value);
    }
    getDynamicText(){
        return element(by.binding('person.name')).getText();
    }
    clickContinue(){
        element(by.buttonText('CONTINUE')).click();
    }
    

};

module.exports = new home_page;