const puppeteer = require('puppeteer');
const utils = require('../utils/utils');
const pageFile = require('../utils/page');
const elements = require('../pages/loginPage');

module.exports = (async () => {
    const browser = await pageFile.getBrowser();
    const page = await pageFile.getPage(browser);
    await pageFile.openUrl(page, elements.website);
    await utils.waitMilliseconds(page, 5000);
    await utils.screenshot(page, elements.homescreen)
    await utils.clickXPath(page, elements.homeLoginButton);
    await utils.waitMilliseconds(page, 5000);
    await utils.type(page, elements.emailInput, "Teste");
    await utils.type(page, elements.passwordInput, "Teste");
    await utils.screenshot(page, elements.loginscreen);
    await utils.clickXPath(page, elements.loginButton);
    await utils.waitMilliseconds(page, 5000);
    await pageFile.closePage(browser);
});

