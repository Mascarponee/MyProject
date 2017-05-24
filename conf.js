"use strict";
exports.config = {
    baseUrl: "https://www.wolframalpha.com/",
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['Test/**/**/WolframAlpha.js'],

    // Run suites like for example: protractor conf.js --suite=smoke
    // Run multiple suites like for example: protractor conf.js --suite=smoke,longRunning
    suites:{
        smoke: 'Test/smoke/*.spec.js',
    },
    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
