## About Cypress

[Cypress](https://www.cypress.io/) is a modern **JavaScript-based** end-to-end testing framework designed for web applications. It enables fast, reliable, and easy-to-write tests for web applications running in the browser.

### Why Use Cypress?
- **Fast & Reliable** – Tests run directly in the browser without flakiness.
- **Easy Setup** – No need for complex configurations; just install and start testing.
- **Powerful Debugging** – Time-travel debugging with built-in snapshots.
- **Built-in Assertions** – Comes with powerful, easy-to-use assertions.
- **Network Control** – Intercepts and modifies HTTP requests.
- **Cross-browser Testing** – Supports Chrome, Edge, Firefox, Webkit (Safari) and Electron.
- **Great Developer Experience** – Provides live reloading, auto-waiting, and rich error messages.

### Test Types Supported by Cypress
- **End-to-End (E2E) Testing** – Automate real user flows from start to finish.
- **Component Testing** – Test individual UI components in isolation.
- **API Testing** – Validate backend endpoints with built-in `cy.request()` and plugins.

For more information, check the official [Cypress documentation](https://docs.cypress.io).

## Cypress Test Scripts

This project includes predefined npm scripts to run Cypress tests efficiently.

##### Open Cypress Test Runner
- Opens the Cypress GUI Test Runner.
- Allows selecting and running tests interactively.
```sh
npm run cy:open
```

##### Run All Tests in Headless Mode (without a browser UI)
- Runs all Cypress tests.
- Outputs results in the terminal.

```sh
npm run cy:run
```

##### Run Smoke Tests in Headless Mode (without a browser UI)
- Runs tests tagged with @smoke.
- Uses --env grepTags=@smoke to filter and execute only smoke tests.

```sh
npm run cy:smoke
```

## Cypress Folder Structure
Cypress
├── downloads
├── e2e
│   ├── 1-getting-started
│   │   └── todo.cy.js
│   └── 2-advanced-examples
│       ├── actions.cy.js
│       ├── aliasing.cy.js
│       ├── assertions.cy.js
│       ├── connectors.cy.js
│       ├── cookies.cy.js
│       ├── cypress_api.cy.js
│       ├── files.cy.js
│       ├── location.cy.js
│       ├── misc.cy.js
│       ├── navigation.cy.js
│       ├── network_requests.cy.js
│       ├── querying.cy.js
│       ├── spies_stubs_clocks.cy.js
│       ├── storage.cy.js
│       ├── traversal.cy.js
│       ├── utilities.cy.js
│       ├── viewport.cy.js
│       ├── waiting.cy.js
│       └── window.cy.js
├── fixtures
│   └── example.json
└── support
    ├── commands.js
    └── e2e.js

## Find Spec Files
- You can print each spec file with the suite and test names inside of it 
```sh
npx find-cypress-specs --names
```

- You can print a spec file with the suite and test names inside of it for a tag 
```sh
npx find-cypress-specs --names --tagged @smoke
```

## Development Dependencies

This project uses the following Cypress-related development dependencies:

### [`@bahmutov/cy-grep`](https://github.com/bahmutov/cy-grep)
- Enables running Cypress tests by tag or test name using `--env grep=...` or `--env grepTags=...`.
- Helps with selective test execution like `@smoke` or `@regression`.

### [`cypress`](https://www.npmjs.com/package/cypress)
- The core **Cypress** testing framework for running end-to-end (E2E) and component tests.
- Provides the Cypress Test Runner and API.

### [`cypress-plugin-api`](https://www.npmjs.com/package/cypress-plugin-api)
- A Cypress plugin that simplifies **API testing**.
- Provides helper commands for making API requests like `cy.api()`.

### [`cypress-plugin-steps`](https://github.com/Titaniumnetwork-dev/cypress-plugin-steps)
- A plugin to add **step-based logging** in Cypress tests.
- Useful for better test readability and debugging.
  
### [`find-cypress-specs`](https://www.npmjs.com/package/find-cypress-specs)
- A CLI tool to **list and filter Cypress spec files**.
- Helps find test files matching specific patterns.
- Useful for running **specific test sets dynamically**.

