// Elementos e acoes juntas aqui

class LoginPage {
    accessPage(){
        cy.visit("https://www.saucedemo.com/v1/");
    }

    fillUser(user){
        cy.get('id=user-name').type(Cypress.env(user))
    }

    fillPassword(password){
        cy.get('id=password').type(Cypress.env(password))
    }

    clickLogin(){
        cy.get('id=login-button').click();
    }

}
export default new LoginPage();