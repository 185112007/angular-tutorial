import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";

// standard user
And("I insert the standard username", () => {
    cy.username("standard_user");
});

Then("I should see the products page", () => {
    cy.verify(".title", "Products");
})

// problem user
And("I insert the problem username", () => {
    cy.username("problem_user");
});

Then("I should see the same products images", () => {
    cy.verify(".title", "Products");
})

// locked out user
And("I insert the locked out username", () => {
    cy.username("locked_out_user");
});

Then("I should see error message", () => {
    cy.verify("[data-test='error']", "Epic sadface: Sorry, this user has been locked out.");
})

// performance user
And("I insert the standard username", () => {
    cy.username("performance_glitch_user");
});

Then("I should see the products page", () => {
    cy.verify(".title", "Products");
})