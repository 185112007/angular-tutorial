/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        launchPage(): Chainable<any>
        insertUsername(): Chainable<any>
    }
}