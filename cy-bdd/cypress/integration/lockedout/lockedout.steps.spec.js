import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I launch the SwagLab site", () => {
    cy.main();
});

And("I insert the locked out username", () => {
    cy.username("locked_out_user");
});

And("I insert the password", () => {
    cy.password("secret_sauce");
})

When("I click the login button", () => {
    cy.login();
})

Then("I should see error message", () => {
    cy.verify("[data-test='error']", "Epic sadface: Sorry, this user has been locked out.");
})
