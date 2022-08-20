import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";

/*Given("I launch the SwagLab site", () => {
    cy.main();
});*/

And("I insert the standard username", () => {
    cy.username("standard_user");
});

/*And("I insert the password", () => {
    cy.password("secret_sauce");
})*/

/*When("I click the login button", () => {
    cy.login();
})*/

Then("I should see the products page", () => {
    cy.verify(".title", "Products");
})
