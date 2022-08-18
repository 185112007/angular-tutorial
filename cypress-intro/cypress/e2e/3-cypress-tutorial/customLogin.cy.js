/// <reference types="Cypress"/>

describe('Custom command for loggin', ()=>{
    it('Login success',()=>{
        cy.fixture("userdata").as("user")
        cy.visit('https://www.saucedemo.com/')
        cy.get("@user").then((user)=>{
            cy.login(user.username, user.password)
        })
    })
})