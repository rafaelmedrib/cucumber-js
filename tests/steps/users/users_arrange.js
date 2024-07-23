const { Given } = require('@cucumber/cucumber');

Given('a new user with the following data', function (docString) {
    this.user = JSON.parse(docString);
});