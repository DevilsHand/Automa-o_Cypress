class HomePage {
    validate(){
        cy.get('.app_logo').click();
    }

}
export default new HomePage();