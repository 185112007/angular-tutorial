export class Login{
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }
    title(){
        cy.title().should('eq', 'Swag Labs')
    }
    username(){
        cy.get('#user-name').type('sdafa')
    }
    password(){
        cy.get('#password').type('12345')
    }
    login(){
        cy.get('#login-button').click()
    }
}