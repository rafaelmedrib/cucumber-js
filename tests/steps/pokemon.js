const { Given, When, Then, BeforeAll } = require("@cucumber/cucumber");
const { spec } = require("pactum");
let pactum = spec();

Given('I want to retrieve info about {string}', function (pokemon) {
  this.pokemon = pokemon
});

When('I make a request to the Pokemon API', async function (docString) {
  const { url } = JSON.parse(docString); 
  pactum.get(url + this.pokemon);
  this.response = await pactum.toss()
});

Then('I should retrieve the pokemon info, such as it\'s {string}', async function (expectedInfo) {
  this.response.json.should.have.property(expectedInfo);
});
