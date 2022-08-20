/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        launchPage(): Chainable<any>
        insertUsername(): Chainable<any>
        insertPassword(): Chainable<any>
        clickLoginButton(): Chainable<any>
        verifyProductPage(): Chainable<any>
    }
}