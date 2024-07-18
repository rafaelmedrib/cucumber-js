const { Given } = require('@cucumber/cucumber');

Given('a user with the following data', function (docString) {
    this.user = JSON.parse(docString);
});