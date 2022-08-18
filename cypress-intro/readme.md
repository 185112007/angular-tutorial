## Cypress Tutorial

#### Create project

    cd go/to/project/folder
    npm init

#### Install Cypress

    npm i cypress --save-dev

#### Start Cypress

    npx cypress open

    OR

    ./node_modules/.bin/cypress open

#### Run Cypress in terminal

    npx cypress run

#### Running one specific test in terminal

    npx cypress run --spec "cypress/e2e/3-cypress-tutorial/firstTest.cy.js"

#### Running specific test in terminal in different browsers

    npx cypress run --browser firefox --spec "cypress/e2e/3-cypress-tutorial/firstTest.cy.js"

#### Install cypress chrome recorder

    npm install -g @cypress/chrome-recorder

#### Import json file into project

    npm @cypress/chrome-recorder go/to/exported.json -o=cypress/e2e