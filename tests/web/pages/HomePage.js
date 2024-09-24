const BasePage = require("./BasePage");
const { BASE_URL } = require("../config/constants");
const { expect } = require("@playwright/test");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    async access() {
        await this.navigateTo(BASE_URL);
        await this.waitForPageLoad();
    }

    async validatePageTitle(expectedTitle) {
        const title = await this.getTitle();
        expect(title).toContain(expectedTitle);
    }
}

module.exports = { HomePage };