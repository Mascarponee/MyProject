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