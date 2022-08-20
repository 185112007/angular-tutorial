import {And, Given, When} from "cypress-cucumber-preprocessor/steps";

Given("I launch the SwagLab site", () => {
    cy.main();
});

And("I insert the password", () => {
    cy.password("secret_sauce");
})

When("I click the login button", () => {
    cy.login();
})