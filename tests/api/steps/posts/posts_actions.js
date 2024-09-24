const { When, After } = require('@cucumber/cucumber');
const { spec } = require('pactum');
const { BASE_URL, POSTS_API } = require('../../config/constants');

let pactum = spec();

After(() => {
    pactum = spec();
});

When('I request all posts', async function () {
    await pactum.get(`${BASE_URL}${POSTS_API}`).toss();

    this.response = pactum.response();
});