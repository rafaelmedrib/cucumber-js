const { string, int, email } = require("pactum-matchers");

module.exports = {
    id: int(),
    name: string(),
    email: email()
}