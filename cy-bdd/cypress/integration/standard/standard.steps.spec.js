import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I launch the SwagLab site", () => {
    cy.launchPage();
});

And("I insert the standard username", () => {
    cy.insertUsername();
});

And("I insert the password", () => {
    cy.insertPassword();
})

When("I click the login button", () => {
    cy.clickLoginButton();
})

Then("I should see the products page", () => {
    cy.verifyProductPage();
})
