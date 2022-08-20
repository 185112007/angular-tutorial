/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        main(): Chainable<any>
        username(username: string): Chainable<any>
        password(password: string): Chainable<any>
        login(): Chainable<any>
        verify(key:string, value: string): Chainable<any>
    }
}