const { eachLike } = require("pactum-matchers");
const user = require('./GET_user_by_id');

module.exports = eachLike(user, { min: 10 });