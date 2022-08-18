describe("Kasa-Desktop", () => {
  it("tests Kasa-Desktop", () => {
    cy.viewport(1920, 598);

    cy.visit("http://188.119.45.36:4400/");

    cy.get("#mat-input-0").click();

    cy.get("#mat-input-0").type("aV3B?~7%4e,#YvwF");

    cy.get("body > kasa-application-root > div > xcelsior-root > div > kasa-application-login-page > div > div.flex-grow-1.flex-shrink-1.d-flex.align-items-center.justify-content-center > div > div.number-area.d-flex.flex-column > button > span.mat-button-wrapper > mat-icon").click();
    cy.location("href").should("eq", "http://188.119.45.36:4400/");

    cy.get("#helping-buttons-window > div > button.mat-focus-indicator.go-menu-button.mat-fab.mat-button-base.mat-primary > span.mat-button-wrapper").click();

    cy.get("#mat-dialog-0 > div > div.flex-grow-1 > kasa-application-go-menu > div > div > button:nth-child(2) > span.mat-button-wrapper > div > span.material-icons").click();

    cy.get("#mat-expansion-panel-header-2 > span.mat-expansion-indicator.ng-tns-c201-6.ng-trigger.ng-trigger-indicatorRotate.ng-star-inserted").click();

    cy.get("#cdk-accordion-child-2 > div > kasa-application-restricted-view > div:nth-child(6) > div").click();

    cy.get("body > kasa-application-root > div > xcelsior-root > button > span.mat-button-wrapper").click();

    cy.get("#mat-dialog-1 > div > div.flex-grow-1 > kasa-application-go-menu > div > div > button:nth-child(1) > span.mat-button-wrapper > div > span.material-icons").click();

  });
});
