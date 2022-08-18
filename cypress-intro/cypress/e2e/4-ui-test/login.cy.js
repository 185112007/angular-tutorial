/// <reference types="Cypress"/>

describe('Kasa Login page', ()=>{
    
    
    it('TC001 - Verify title',()=>{
        cy.visit('http://188.119.45.36:4400/');
        cy.title().should('equal', '')
    })

    it('TC002 - Login success', ()=>{
        cy.get('.mat-input-element').type('aV3B?~7%4e,#YvwF')
        cy.get('.login-button').click()
    })

    it('TC003 - Login fail', ()=>{
        cy.get('.mat-input-element').clear().type('1234567')
        cy.get('.login-button').click()
    })

    it('TC004 - ', () => {
        cy.get('.mat-button-wrapper').click()
    })
})