const puppeteer = require('puppeteer');
const utils = require('../utils/utils');
const pageFile = require('../utils/page');
const elements = require('../pages/cadastroPage');

module.exports = (async () => {
    //open browser and page
    const browser = await pageFile.getBrowser();
    const page = await pageFile.getPage(browser);
    await pageFile.openUrl(page, elements.website);

    //load and screenshot
    await utils.waitMilliseconds(page, 5000);
    await utils.screenshot(page, elements.homescreenVoluntario)

    //Select Cadastro and load page
    await utils.clickXPath(page, elements.homeCadastroButton);
    await utils.waitMilliseconds(page, 5000);

    //Fill out fields with Voluntario and click on Registrar
    await utils.type(page, elements.nomeInput, "Teste");
    await utils.type(page, elements.emailInput, "Teste@teste.com");
    await utils.waitMilliseconds(page, 2000);
    await utils.selectOption(page, elements.tipoPessoaSelector, elements.voluntarioElement);
    await utils.waitMilliseconds(page, 2000);
    await utils.type(page, elements.passwordInput, "Teste");
    await utils.screenshot(page, elements.cadastroscreenVoluntario);
    await utils.clickXPath(page, elements.registrarButton);
    await utils.waitMilliseconds(page, 5000);

    //Close browser
    await pageFile.closePage(browser);
});

