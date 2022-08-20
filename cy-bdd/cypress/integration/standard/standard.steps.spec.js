import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I launch the SwagLab site", () => {
    cy.visit("/")
});

When("I insert the standard username", () => {
    cy.get("[data-test='username']")
        .should("exist")
        .should("be.visible")
        .type("standard_user");
});

And("I insert the password", () => {
    cy.get("[data-test='password']")
        .should("exist")
        .should("be.visible")
        .type("secret_sauce");
})

And("I click the login button", () => {
    cy.get("[data-test='login-button']")
        .should("exist")
        .should("be.visible")
        .click();
})

Then("I should see the products page", () => {
    cy.title().should("eq", "Swag Labs")
})
