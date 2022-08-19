// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe('React - TodoMVC', () => {

  it("adds a single todo", ()=>{
    // Arrange
    cy.visit('/')
    
    // Act
    cy.get(".new-todo").type("Buy Milk{enter}")
    
    // Assert
    cy.get(".todo-list li").should("have.length", 1)
  })

  // using .then() & .wrap()
  describe("using .then() & .wrap()", ()=>{
    it("getting the <button> HTML element.", ()=>{
      cy.get("button").then(($btn) => {
        const cls = $btn.attr("class")
      
        cy.wrap($btn).click().should("not.have.class", cls)
      })
    })
  })

  // using alias & waiting
  describe("User Sign-up and Login", ()=>{
    beforeEach(() => {
      cy.request("POST", "/users").as("signup") // creating the signup alias
    })
  
    it.skip("should allow a visitor to sign-up, login, and logout", () => {
      cy.visit("/")
      // ...
  
      cy.wait("@signup") // waiting upon the signup alias
  
      // ...
    })
  })

})
