class HomePage {
    validate(){
        cy.get('class=app_logo').click();
    }

}
export default new HomePage();