// Steps vao nessa pagina, junto do import do login 

import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/Steps';
import loginPage from '../pages/loginPage';

Given('estar na pagina de Login', () =>{
    loginPage.accessPage;
})

When('preencher o usuario {string}', (user) =>{
    loginPage.fillUser(user);
})

And('preencher a senha {string}', (password) =>{
    loginPage.fillUser(password);
})

And('clicar em login', () =>{
    loginPage.clickLogin();
})

Then('a pagina inicial aparece', ()=>{
    
})