Cypress.Commands.add("launchPage", () => {
    cy.visit("/")
})

Cypress.Commands.add("insertUsername", () => {
    cy.get("[data-test='username']")
        .should("exist")
        .should("be.visible")
        .type("standard_user");
})