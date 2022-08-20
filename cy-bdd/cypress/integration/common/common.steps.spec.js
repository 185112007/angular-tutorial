import {And, Given, When} from "cypress-cucumber-preprocessor/steps";

Given("I launch the SwagLab site", () => {
    cy.main();
});

And("I insert the {string} username", (userType) => {

    cy.fixture('selectors').then((el) => {
        switch (userType){
            case "standard":
                cy.username(el.standardUser);
                break;
            case "problem":
                cy.username(el.problemUser);
                break;
            case "locked":
                cy.username(el.lockOutUser);
                break;
            case "performance":
                cy.username(el.performanceGlitchUser);
                break;
        }
    })

});

And("I insert the password", () => {
    cy.password("secret_sauce");
})

When("I click the login button", () => {
    cy.login();
})