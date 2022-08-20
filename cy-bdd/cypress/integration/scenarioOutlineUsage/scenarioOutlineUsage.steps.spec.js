import {Then} from "cypress-cucumber-preprocessor/steps";

Then("I should see the {string}", (experience) => {

    switch (experience) {
        case "product page":
            cy.verify(".title", "Products");
            break;
        case "error message":
            cy.verify("[data-test='error']", "Epic sadface: Sorry, this user has been locked out.");
            break;
        case "multiple images":
            cy.verify(".title", "Products");
            break;
        case "delayed products page":
            cy.verify(".title", "Products");
            break;
    }

});