const website = "http://volunteer.fepalemes.com.br/index.html";
const homescreenONG = './screenshots/cadastroONGTest/Home.jpg';
const homescreenVoluntario = './screenshots/cadastroVoluntarioTest/Home.jpg';
const homescreenONGVoluntario = './screenshots/cadastroONGVoluntarioTest/Home.jpg';
const homeCadastroButton = "//a[contains(text(), concat('Cadastro', ''))]";
const nomeInput = 'input[type="text"]';
const emailInput = 'input[type="email"]';
const tipoPessoaSelector = 'select[id="exampleFormControlSelect2"]';
const voluntarioElement = 'Voluntário';
const ongElement = 'ONG';
const ongVoluntarioElement = 'ONG e Voluntário';
const passwordInput = 'input[type="password"]';
const cadastroscreenONG = './screenshots/cadastroONGTest/cadasto.png';
const cadastroscreenVoluntario = './screenshots/cadastroVoluntarioTest/cadasto.png';
const cadastroscreenONGVoluntario = './screenshots/cadastroONGVoluntarioTest/cadasto.png';
const registrarButton = "//a[contains(text(), concat('Registrar', ''))]";

module.exports = {
    website, homeCadastroButton, nomeInput, 
    homescreenONG, homescreenVoluntario, homescreenONGVoluntario,
    emailInput, tipoPessoaSelector, voluntarioElement, 
    ongElement, ongVoluntarioElement, passwordInput, registrarButton,
    cadastroscreenONG, cadastroscreenVoluntario, cadastroscreenONGVoluntario
};