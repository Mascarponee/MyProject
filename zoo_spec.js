// Configuration and Basic Test

// describe("test zoo page for input field on home page", function () {

//     afterEach(function () {
//         console.log("Ya did it!");
//     });

//     it("test input field and check text output", function () {
//         browser.get("http://www.thetestroom.com/jswebapp/index.html");
//         element(by.model("person.name")).sendKeys("I will subscribe to this channel");
//         element(by.binding("person.name")).getText().then(function (text) {
//             console.log(text);
//         });
//     });
// });

// // Using Locators

// describe("Adopt an Animal on the zoo test page", function () {

//     afterEach(function () {
//         console.log("Ya did it!");
//     });

//     it("should be able to adopt an Animal", function () {
//         browser.get("http://www.thetestroom.com/jswebapp/index.html");
//         element(by.model("person.name")).sendKeys("James Franklin");
//         element(by.binding("person.name")).getText().then(function (text) {
//             console.log(text);
//         });
//         element(by.buttonText("CONTINUE")).click();
//         element(by.model("animal")).element(by.css('[value="1"]')).click();
//         element(by.partialButtonText("CONT")).click();
//     });

// });

// Using Expects

// describe("Adopt an Animal on the zoo test page", function () {

//     afterEach(function () {
//         console.log("Ya did it!");
//     });

//     xit("should be able to enter the correct page", function () {
//         browser.get("http://www.thetestroom.com/jswebapp/index.html");
//         expect(browser.getCurrentUrl()).toContain("jswebapp");
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html");
//     });

//     xit("should generate correct text", function () {
//         browser.get("http://www.thetestroom.com/jswebapp/index.html");
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html");

//         var textMessage = "James Franklin"

//         element(by.model("person.name")).sendKeys(textMessage);
//         element(by.binding("person.name")).getText().then(function (text) {
//             expect(text).toEqual(textMessage);

//         });
//     });

//     it("should check the correct number of items in the dropdown ", function () {
//         browser.get("http://www.thetestroom.com/jswebapp/index.html");
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html");
//         element(by.buttonText("CONTINUE")).click();
//         element(by.model("animal")).$('[value="1"]').click();

//         element.all(by.css(".ng-pristine option")).then(function (items) {
//             expect(items.length).toBe(4);
//             expect(items[0].getText()).toBe("Please select from the drop down below");
//             expect(items[1].getText()).toBe("George the Turtle");
//             expect(items[2].getText()).toBe("Simba the Lion");
//             expect(items[3].getText()).toBe("Nemo the Fish");
//         });
//         element(by.id("continue_button")).click();
//     });

//     xit("should check USer is on the Thank you page ", function () {
//         browser.get("http://www.thetestroom.com/jswebapp/index.html");
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html");
//         element(by.buttonText("CONTINUE")).click();
//         // element(by.model("animal")).$('[value="1"]').click();
//         element(by.id("continue_button")).click();
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/confirm.html");
//     });
// });

// Before and After

// describe("Adopt an Animal on the zoo test page", function () {

//     beforeEach(function () {
//         browser.get("http://www.thetestroom.com/jswebapp/index.html");
//     });

//     afterEach(function () {
//         console.log("Ya did it!");
//     });

//     it("should be able to enter the correct page", function () {
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html");
//     });

//     describe("should generate correct text", function () {

//         var textMessage

//         beforeEach(function () {
//             textMessage = "Aretha Franklin";
//         });

//         it("should check correct text", function () {
//             expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html")
//             element(by.model("person.name")).sendKeys(textMessage);
//             element(by.binding("person.name")).getText().then(function (text) {
//                 expect(text).toEqual(textMessage);
//             });
//         });
//     });

//     describe("should check the correct number of items in the dropdown ", function () {

//         var lengthOfItems = 4;

//         beforeEach(function () {
//         lengthOfItems = 4;
//     });

//     it("should check the correct number of items",function(){
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html");
//         element(by.buttonText("CONTINUE")).click();
//         element(by.model("animal")).$('[value="1"]').click();

//         element.all(by.css(".ng-pristine option")).then(function (items) {
//             expect(items.length).toBe(lengthOfItems);
//             expect(items[0].getText()).toBe("Please select from the drop down below");
//             expect(items[1].getText()).toBe("George the Turtle");
//             expect(items[2].getText()).toBe("Simba the Lion");
//             expect(items[3].getText()).toBe("Nemo the Fish");
//         });
//         element(by.id("continue_button")).click();
//         });
//     });

//     it("should check USer is on the Thank you page ", function () {
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/index.html");
//         element(by.buttonText("CONTINUE")).click();
//         // element(by.model("animal")).$('[value="1"]').click();
//         element(by.id("continue_button")).click();
//         expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/confirm.html");
//     });
// });

// CSS Expressions

describe("Testing the Javascript Zoo site", function () {

    beforeEach(function () {
        browser.get("http://www.thetestroom.com/jswebapp/index.html");
    });

    it("should test by using CSS Expressions", function () {
        // css tag
        element(by.css('input')).sendKeys("text test");
        // css class ( . -> represents class)
        element(by.css('.ng-binding')).getText().then(function (text) {
            console.log(text);
        });
        // css ID's ( # -> represents ID)
        element(by.css('#continue_button')).click();

        // css Chaining (button#continue_button -> we try to find sth by tag button and that tag has an attribute called ID which has a value of continue_button)
        element(by.css('button#continue_button')).click();

        // css Child Nodes (table(space)td(space)a -> Find us a Tag of type table and look at all of its child nodes (not direct descendant!) which are of type td.
        // Once we have found all the td nodes,look at all nodes inside td which are of type a. When you find the first one which matches this path, do sth with it)
        element(by.css('table td a')).getText().then(function (text) {
            console.log(text);
        });
        //css attributes
        element(by.css('[id="title"]')).getText().then(function (text) {
            console.log(text);
        });
    });

    // pass it in here, and we identifiyng it as text:
    // (text)



