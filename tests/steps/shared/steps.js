const { Then } = require("@cucumber/cucumber");

Then("the response status code must be {int}", function (int) {
  this.response.should.have.status(int);
});

Then(
  "the response body must conform with the {string} contract",
  function (contractName) {
    const contract = require(`../../contracts/${contractName}`);

    this.response.should.have.jsonMatch(contract);
  }
);
