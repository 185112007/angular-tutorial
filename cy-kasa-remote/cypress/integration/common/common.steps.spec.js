import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given("I launch the Kasa app", () => {
    cy.main();
});

And("I insert the password", () => {
    cy.fixture('selectors').then((data)=>{
        cy.password(data.passwordInputId, data.password);
    })
})

When("I click the login button", () => {
    cy.fixture('selectors').then((data)=>{
        cy.login(data.loginButtonId);
    })
})

Then("I should see the main page with specific title", () => {
    cy.fixture('selectors').then((data)=>{
        cy.verify(data.verifyKey, data.verifyValue);
    })
})