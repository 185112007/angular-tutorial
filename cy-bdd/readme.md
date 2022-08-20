# Cypress & Cucumber(BDD)

### Create empty project

```
$ cd go/to/your/workspace
$ mkdir your-project-folder
$ cd your-project-folder
$ npm init --y
```

### Install dependencies

```
$ npm i -D cypress@9.7.0 cypress-cucumber-preprocessor cypress-fill-command
```

__note__: -D is a shortcut for --save-dev

### Configuration

```
//package.json set 
"nonGlobalStepDefinitions": true
```

With this option above, all global steps will be stored in cypress/integration/common

### Open Cypress

```
$ npx cypress open
```

### Cypress Configuration

Add it to your plugins:

cypress/plugins/index.js

```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Add support for feature files to your Cypress configuration

cypress.json
```
{
  "testFiles": "**/*.{feature,features}",
  "baseUrl": "https://www.saucedemo.com",
  "viewportHeight": 900,
  "viewportWidth": 1400,
  "defaultCommandTimeout": 10000
}
```