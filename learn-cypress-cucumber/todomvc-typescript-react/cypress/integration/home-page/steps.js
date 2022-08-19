import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the home page", () => {
    cy.visit("/");
})

When("the home page has loaded", () => {
    cy.get(".todoapp").should("be.visible");
})

Then("I see the home page", () => {
    cy.get(".header").should("be.visible");
    cy.get(".info").should("be.visible");
})

Given("I have following todos:", (dataTable) => {
    let todos = [];
    dataTable.rawTable.slice(1).forEach((element, index) => {
        const [title, completed] = element;
        todos.push({
            id: `test-todo-{index}`,
            title, 
            completed: completed === true
        });
    });
    cy.visit("/");
    window.localStorage.setItem("react-todos", JSON.stringify(todos));
})

Then("I see the following todos:", (dataTable) =>{
    dataTable.rawTable.slice(1).forEach(todo => {
        cy.get(".todo-list li .view label").should("contain", todo[0]);
    });
})

Then("I see that I have {string}", (itemsLeft) => {
    cy.get(".footer .todo-count").should("contain", itemsLeft);
});