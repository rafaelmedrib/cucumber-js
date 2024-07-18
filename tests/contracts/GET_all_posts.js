const { eachLike, int, string } = require("pactum-matchers");

module.exports = eachLike({
  userId: int(),
  id: int(),
  title: string(),
  body: string(),
});
