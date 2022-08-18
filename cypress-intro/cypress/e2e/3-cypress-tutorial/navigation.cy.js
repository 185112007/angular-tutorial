/// <reference types="Cypress"/>

describe('Tarayicida ileri/geri kullanimi', ()=>{
    it('TC001 - cypress.io sitesine git, featuresa tikla, geri ve ileri komutlarini kullan',()=>{

        cy.viewport(1500, 800)

        cy.visit("https://www.cypress.io/");
        cy.title().should('equal', "JavaScript End to End Testing Framework | cypress.io testing tools");
        
        cy.get("div#page-content ul:nth-child(1) > li:nth-child(4) > a").click();
        cy.title().should("eq", "Pricing For Cypress Testing Framework | cypress.io testing tools")

        cy.go('back')
        cy.title().should('equal', "JavaScript End to End Testing Framework | cypress.io testing tools");

        cy.go("forward")
        cy.title().should("eq", "Pricing For Cypress Testing Framework | cypress.io testing tools")

        cy.go(-1)
        cy.title().should('equal', "JavaScript End to End Testing Framework | cypress.io testing tools");

        cy.go(1)
        cy.title().should("eq", "Pricing For Cypress Testing Framework | cypress.io testing tools")
    })
})