const website = "http://localhost:3000/register";
const registerScreen = './screenshots/cadastroVoluntarioTest/Registro.jpg';
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
const registrarButton = "//a[contains(text(), concat('REGISTRAR', ''))]";
const logarSeLink = "//a[contains(text(), concat('Logar-se', ''))]";

module.exports = {
    website, registerScreen, nomeInput, 
    emailInput, tipoPessoaSelector, voluntarioElement, 
    ongElement, ongVoluntarioElement, passwordInput, registrarButton,
    cadastroscreenONG, cadastroscreenVoluntario, cadastroscreenONGVoluntario, logarSeLink
};