/// <reference types="Cypress"/>

describe('SauceDemo Login sayfasi testi', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('TC001 - SauceDemo sayfasına git ve basligi dogrula',()=>{
        cy.title().should('eq', 'Swag Labs')
    })

    it('TC002 - SauceDemo Basarisiz Login testi', ()=>{
        cy.get('#user-name').type('sdafa')//username icin standard_user
        cy.get('#password').type('12345')//password icin
        cy.get('#login-button').click()//click icin
    })

    it('TC003 - SauceDemo Basarili Login testi', ()=>{
        cy.get('#user-name').clear().type('standard_user')//username icin standard_user
        cy.get('#password').clear().type('secret_sauce')//password icin
        cy.get('#login-button').click()//click icin
    })
})