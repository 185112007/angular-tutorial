import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";

// standard user
Then("I should see the products page", () => {
    cy.verify(".title", "Products");
})

// problem user
Then("I should see the same products images", () => {
    cy.verify(".title", "Products");
})

// locked out user
Then("I should see error message", () => {
    cy.verify("[data-test='error']", "Epic sadface: Sorry, this user has been locked out.");
})

// performance user
Then("I should see the products page", () => {
    cy.verify(".title", "Products");
})