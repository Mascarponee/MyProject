import {Config} from 'protractor';

export let config: Config = {

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
  specs: ['WolframAlpha.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
  
   // When navigating to a new page using browser.get, Protractor waits for the page to be loaded and the new URL to appear before continuing.
    // getPageTimeout: 60000,

    // Before performing any action, Protractor asks Angular to wait until the page is synchronized. This means that all timeouts and http requests are finished. If your application continuously polls $timeout or $http, it will never be registered as completely loaded. You should use the $interval service (interval.js) for anything that polls continuously
    // allScriptsTimeout: 60000,
  
// onPrepare: function () {
        //browser.driver.manage().window().maximize();
        // browser.driver.manage().window().setSize(1600, 1200);
  
};
