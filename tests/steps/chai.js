const { BeforeAll } = require("@cucumber/cucumber");

BeforeAll(async () => {
  const chai = await import("chai");
  chai.should();
});
