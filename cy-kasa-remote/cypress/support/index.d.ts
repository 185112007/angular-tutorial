/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        main(): Chainable<any>
        password(inputId:string, password: string): Chainable<any>
        login(buttonId:string): Chainable<any>
        verify(key:string, value: string): Chainable<any>
    }
}