"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var inputField = protractor_1.element(protractor_1.by.id("query"));
exports.inputField = inputField;
var submitButton = protractor_1.element(protractor_1.by.css('.eq')).$('[value="Submit"]');
exports.submitButton = submitButton;
var inputView = protractor_1.element(protractor_1.by.id('view'));
exports.inputView = inputView;
