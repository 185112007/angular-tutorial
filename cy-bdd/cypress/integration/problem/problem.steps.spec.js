import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";

/*Given("I launch the SwagLab site", () => {
    cy.main();
});*/

And("I insert the problem username", () => {
    cy.username("problem_user");
});

/*And("I insert the password", () => {
    cy.password("secret_sauce");
})*/

/*When("I click the login button", () => {
    cy.login();
})*/

Then("I should see the same products images", () => {
    cy.verify(".title", "Products");
})
