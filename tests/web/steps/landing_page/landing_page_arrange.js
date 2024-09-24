const { Given, Then, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const { HomePage } = require('../../pages/HomePage');
const { BASE_URL } = require("../../config/constants");

let homePage;

BeforeAll(async function () {
  homePage = new HomePage(BASE_URL);
  await homePage.start();
});

AfterAll(async function () {
  await homePage.close();
});

Given("the user is on the landing page", async function () {
  await homePage.access();
  await homePage.snapshot("landing_page");
});

Then('the title must be {string}', async function (expectedTitle) {
  await homePage.validatePageTitle(expectedTitle);
});
