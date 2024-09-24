const { chromium } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async start() {
        this.browser = await chromium.launch({ headless: true });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async close() {
        await this.page.close();
        await this.context.close();
        await this.browser.close();
    }

    async navigateTo(url) {
        return await this.page.goto(url);
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async getTitle() {
        return this.page.title();
    }

    async snapshot(name) {
        await this.page.screenshot({ path: `./reports/screenshots/${name}.png` });
    }
}

module.exports = BasePage;