// https://app.pluralsight.com/library/courses/protractor-introduction/table-of-contents

// Short tests, that test if a Button is disabled if no text is provided (1) and if button gets enabled if text is provided (2)

describe('Creating an event', function () {
  // (1)
  describe('When the form is invalid', function () {
    it('should have the submit button disabled', function () {
      browser.get('http://localhost:3000/#!/EventRatings/new');

      var button = element(by.buttonText('Create'));

      var css = button.getAttribute('class');

      expect(css).toMatch('disabled');
    });
  });

  // (2)
  describe('and specifying the name', function () {
    it('should enable the create button', function () {
      browser.get('http://localhost:3000/#!/EventRatings/new');

      var name = element(by.model('event.name')).sendKeys('A Sample Event');

      expect(element(by.buttonText('Create')).getAttribute('class')).not.toMatch('disabled');
    });
  });
});
