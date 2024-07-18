const { When, After } = require("@cucumber/cucumber");
const { spec } = require("pactum");
const { BASE_URL, USERS_API } = require("../../config/apis");

let pactum = spec();

After(function () {
  pactum = spec();
});

When("I request all users", async function () {
  await pactum.get(`${BASE_URL}${USERS_API}`).toss();

  this.response = pactum.response();
});

When("I request the user with ID {int}", async function (userId) {
  await pactum.get(`${BASE_URL}${USERS_API}/${userId}`).toss();

  this.response = pactum.response();
});

When("I create the user", async function () {
  await pactum.post(`${BASE_URL}${USERS_API}`).withBody(this.user).toss();

  this.response = pactum.response();
});
