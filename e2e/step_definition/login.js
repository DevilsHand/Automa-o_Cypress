// Steps vao nessa pagina, junto do import do login 

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage'

Given("estar na pagina de Login", () =>{
    loginPage.accessPage();
})

When('preencher o usuario {string}', (user) =>{
    loginPage.fillUser(user);
})

When('preencher a senha {string}', (password) =>{
    loginPage.fillPassword(password);
})

When('clicar em login', () =>{
    loginPage.clickLogin();
})

Then('a pagina inicial aparece', ()=>{
    homePage.validate();

})