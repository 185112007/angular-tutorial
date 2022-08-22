Cypress.Commands.add("main", () => {
    cy.visit("/")
})

Cypress.Commands.add("password", (inputId, password) => {
    cy.get(inputId)
        .should("exist")
        .should("be.visible")
        .type(password);
})

Cypress.Commands.add("login", (buttonId) => {
    cy.get(buttonId)
        .should("exist")
        .should("be.visible")
        .click();
})

Cypress.Commands.add("verify", (key,value) => {
    cy.get(key).should("have.text", value)
})