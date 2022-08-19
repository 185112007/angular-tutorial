# Learn Cypress-Cucumber

### Initial repository

    $ cd todomvc-typescript-react/
    $ npm install
    $ npm start

You will see that the TodoMVC application is serving on http://localhost:4200

Open the above URL in your browser and you will see the TodoMVC application.

Explore around and see that you can:

    Add one or more todos
    Complete a todo
    Delete a todo
    Filter by active
    Filter by completed
    Clear all completed todos

### Adding Cypress and Cypress-Cucumber-Preprocessor

    $ npm i cypress@9.7.0 --save-dev
    $ npm i cypress-cucumber-preprocessor --save-dev

### Add script to package.json

    "scripts": {
        ...
        "cy:open": "cypress open"
    },

### Let's test it by executing the script

    $ npm run cy:open

### Configure Cypress

```json
// cypress.json
{
  "baseUrl": "http://localhost:4200/",
  "testFiles": "**/*.{feature,features}"
}
```

### Configure Cypress-Cucumber-Preprocessor

Import the plugin:

```js
//cypress/plugins/index.js
const cucumber = require("cypress-cucumber-preprocessor").default;
```

Tell cypress to run the cucumber plugin when preprocessing the test files:

```js
//cypress/plugins/index.js
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
```

Add the following to the bottom of the package.json file:

```json
//package.json
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
```

### Write scenario

Write feature file & spec files for this feature