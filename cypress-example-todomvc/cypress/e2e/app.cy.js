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

})
