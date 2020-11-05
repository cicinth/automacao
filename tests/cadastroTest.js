const puppeteer = require('puppeteer');
const utils = require('../utils/utils');
const pageFile = require('../utils/page');
const elements = require('../pages/cadastroPage');

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

    it('Cadastro test - Cadastro de ONG', async function(){
        //load and screenshot
        await pageFile.openUrl(page, elements.website);
        await utils.waitMilliseconds(page, 5000);
        await utils.screenshot(page, elements.homescreenONG);

        //Select Cadastro and load page
        await utils.clickXPath(page, elements.homeCadastroButton);
        await utils.waitMilliseconds(page, 5000);

        //Fill out fields with Voluntario and click on Registrar
        await utils.type(page, elements.nomeInput, "Teste");
        await utils.type(page, elements.emailInput, "Teste@teste.com");
        await utils.selectOption(page, elements.tipoPessoaSelector, elements.ongElement);
        await utils.waitMilliseconds(page, 2000);
        await utils.type(page, elements.passwordInput, "Teste");
        await utils.screenshot(page, elements.cadastroscreenONG);
        await utils.clickXPath(page, elements.registrarButton);
        await utils.waitMilliseconds(page, 5000);
    })

    it('Cadastro test - Cadastro de Voluntário', async function(){
        //load and screenshot
        await pageFile.openUrl(page, elements.website);
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
    })

    it('Cadastro test - Cadastro de ONG e Voluntário', async function(){
        //load and screenshot
        await pageFile.openUrl(page, elements.website);
        await utils.waitMilliseconds(page, 5000);
        await utils.screenshot(page, elements.homescreenONGVoluntario)
        
        //Select Cadastro and load page
        await utils.clickXPath(page, elements.homeCadastroButton);
        await utils.waitMilliseconds(page, 5000);

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
    })
})