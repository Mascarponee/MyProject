    import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
    
    let inputField = element(by.id("query"));
    let submitButton = element(by.css('.eq')).$('[value="Submit"]');
    let inputView = element(by.id('view'));

    export {inputField, submitButton, inputView};
