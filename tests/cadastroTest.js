const utils = require('../utils/utils');
const pageFile = require('../utils/page');
const elements = require('../pages/cadastroPage');
const expect = require('chai').expect;

describe('Cadastro test', () =>{
    let browser
    let page

    before(async function(){
        browser = await pageFile.getBrowser();
        page = await pageFile.getPage(browser);
        pageFile.configAlert(page);
    })

    after(async function(){
        await pageFile.closePage(browser);
    })

    it('Cadastro test - Cadastro de ONG', async function(){
        //load and screenshot
        await pageFile.openUrl(page, elements.website);
        await utils.waitMilliseconds(page, 5000);
        //await utils.screenshot(page, elements.registerScreen);
        await utils.waitObject(page, elements.nomeInput);

        //Fill out fields with Voluntario and click on Registrar
        await utils.type(page, elements.nomeInput, "Teste");
        await utils.type(page, elements.emailInput, "Teste@teste.com");
        await utils.selectOption(page, elements.tipoPessoaSelector, elements.ongElement);
        await utils.waitMilliseconds(page, 2000);
        await utils.type(page, elements.passwordInput, "Teste");
        //await utils.scrollDown(page);
        await utils.waitMilliseconds(page, 2000);
        await utils.screenshot(page, elements.cadastroscreenONG);
        await utils.clickXPath(page, elements.registrarButton);
        await utils.waitMilliseconds(page, 5000);
        const message = await utils.getDialogText(page);
        utils.assertion(message, 'CHAMAR FUNCTION REGISTRAR');
    })

    it('Cadastro test - Cadastro de Voluntário', async function(){
        //load and screenshot
        await pageFile.openUrl(page, elements.website);
        await utils.waitMilliseconds(page, 5000);
        await utils.waitObject(page, elements.nomeInput);

        //Fill out fields with Voluntario and click on Registrar
        await utils.type(page, elements.nomeInput, "Teste");
        await utils.type(page, elements.emailInput, "Teste@teste.com");
        await utils.waitMilliseconds(page, 2000);
        await utils.selectOption(page, elements.tipoPessoaSelector, elements.voluntarioElement);
        await utils.waitMilliseconds(page, 2000);
        await utils.type(page, elements.passwordInput, "Teste");
        await utils.screenshot(page, elements.cadastroscreenVoluntario);
        await utils.clickXPath(page, elements.registrarButton);
        //await utils.waitMilliseconds(page, 5000);
        const message = await utils.getDialogText(page);
        utils.assertion(message, 'CHAMAR FUNCTION REGISTRAR');
    })

    it('Cadastro test - Cadastro de ONG e Voluntário', async function(){
        //load and screenshot
        await pageFile.openUrl(page, elements.website);
        await utils.waitMilliseconds(page, 5000);
        await utils.waitObject(page, elements.nomeInput);

        //Fill out fields with Voluntario and click on Registrar
        await utils.type(page, elements.nomeInput, "Teste");
        await utils.type(page, elements.emailInput, "Teste@teste.com");
        await utils.waitMilliseconds(page, 2000);
        await utils.selectOption(page, elements.tipoPessoaSelector, elements.ongVoluntarioElement);
        await utils.waitMilliseconds(page, 2000);
        await utils.type(page, elements.passwordInput, "Teste");
        await utils.screenshot(page, elements.cadastroscreenONGVoluntario);
        await utils.clickXPath(page, elements.registrarButton);
        await utils.waitMilliseconds(page, 5000);
        const message = await utils.getDialogText(page);
        utils.assertion(message, 'CHAMAR FUNCTION REGISTRAR');
    })

    it('Cadastro test - Navegar para Login', async function(){
        //load
        await pageFile.openUrl(page, elements.website);
        await utils.waitMilliseconds(page, 5000);
        await utils.waitObject(page, elements.nomeInput);

        //Clicar em registrar
        await utils.scrollDown(page);
        await utils.click(page, elements.logarSeLink);

        await utils.screenshot(page, elements.registerScreen);

        //await utils.assertion()
    })
})