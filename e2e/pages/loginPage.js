// Elementos e acoes juntas aqui

class LoginPage {
    url = "http://www.saucedemo.com/v1/";

    accessPage(){
        cy.visit(this.url);
    }

    fillUser(user){
        cy.get('[data-test="username"]').type(user);
    }

    fillPassword(password){
        cy.get('[data-test="password"]').type(password);
    }

    clickLogin(){
        cy.get('#login-button').click();
    }

}
export default new LoginPage();