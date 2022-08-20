Cypress.Commands.add("main", () => {
    cy.visit("/")
})

Cypress.Commands.add("username", (username) => {
    cy.get("[data-test='username']")
        .should("exist")
        .should("be.visible")
        .type(username);
})

Cypress.Commands.add("password", (password) => {
    cy.get("[data-test='password']")
        .should("exist")
        .should("be.visible")
        .type(password);
})

Cypress.Commands.add("login", () => {
    cy.get("[data-test='login-button']")
        .should("exist")
        .should("be.visible")
        .click();
})

Cypress.Commands.add("verify", (key,value) => {
    cy.get(key).should("have.text", value)
})
