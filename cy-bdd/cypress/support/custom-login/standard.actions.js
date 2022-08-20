Cypress.Commands.add("launchPage", () => {
    cy.visit("/")
})

Cypress.Commands.add("insertUsername", () => {
    cy.get("[data-test='username']")
        .should("exist")
        .should("be.visible")
        .type("standard_user");
})

Cypress.Commands.add("insertPassword", () => {
    cy.get("[data-test='password']")
        .should("exist")
        .should("be.visible")
        .type("secret_sauce");
})

Cypress.Commands.add("clickLoginButton", () => {
    cy.get("[data-test='login-button']")
        .should("exist")
        .should("be.visible")
        .click();
})

Cypress.Commands.add("verifyProductPage", () => {
    cy.get(".title").should("have.text", "Products")
})