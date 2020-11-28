const utils = require('../utils/utils');
const pageFile = require('../utils/page');
const elements = require('../pages/loginPage');

describe('Login test', () =>{
    let browser
    let page

    before(async function(){
        browser = await pageFile.getBrowser();
        page = await pageFile.getPage(browser);
    })

    after(async function(){
        await pageFile.closePage(browser);
    })

    it('Login test - Invalid login', async function(){
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
    })

    it('Login test - Valid login', async function(){
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
    })
})

