# Test-Driven Development Exercise with JavaScript

`>` **KeepCoding Projects - Web 18:** 📁 [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

`>` **Select your Language:** [Spanish](README.es.md) 🔄 [German](README.de.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Project Objective

In order to demonstrate the knowledge acquired in virtual classes, this project consists of performing testing exercises using the “jest” dependency.

<!-- ------------------------------------------------------------------------------------------- -->

## Learned and Developed Knowledge

### Software Testing

Testing is essential to detect bugs before deployment, increase confidence in the code, support release decisions, and promote good development practices. It is a key part of methodologies like Waterfall, Agile, and DevOps, where tests are often automated in continuous integration and delivery cycles.

### Types of Tests

#### 1. External Tests (End-to-End)

- Manual: A tester visually verifies the application's behavior following predefined steps.
- Automated: Simulate user interactions to validate behavior after code changes.

#### 2. Functional Tests

- Unit: Evaluate individual functions or modules in isolation.
- Integration: Check that multiple components work correctly together.
- End-to-End: Simulate complete user flows to ensure the application functions as expected.

#### 3. Non-Functional Tests

- Security: Detect vulnerabilities and validate the protection of sensitive data.
- Performance: Evaluate response times and behavior under load.
- Usability: Analyze real user experience within the interface.
- Accessibility: Ensure the application is usable by people with disabilities.

### Tools Used

- Jasmine, Jest, Mocha + Chai: Unit testing for JavaScript and Node.js.
- Supertest: Functional testing in backend environments.
- Selenium, Puppeteer, Protractor, Playwright: Automated E2E tests in browsers.

### TDD (Test Driven Development)

TDD consists of writing the test first, then the minimal code to pass it, and finally refactoring. This approach improves quality, avoids unnecessary complexity, and helps catch bugs early. It is supported by SOLID principles and promotes cleaner, more maintainable code.

### BDD and ATDD

BDD (Behavior Driven Development) and ATDD (Acceptance Test Driven Development) aim to align developers, testers, and stakeholders by clearly defining expected behaviors. They use structured languages like Gherkin to describe test scenarios in a format understandable by all involved.

<!-- ------------------------------------------------------------------------------------------- -->

## Project Details

TODO

<!-- ------------------------------------------------------------------------------------------- -->

## Technologies Used

- **Languages:** JavaScript.
- **Notable Dependencies (Node.js):** Babel, Jest, and Axios.

<!-- ------------------------------------------------------------------------------------------- -->

## Installation and Usage Instructions

### 1. Software Requirements

- **[Node.js](https://nodejs.org/en/download/)** (tested on version **v22.15.1**)
- **[Git](https://git-scm.com/downloads)** (tested on version **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (tested on version **1.99.0**)

### 2. Repository Cloning

```bash
git clone https://github.com/pablo-sch/keepcoding-09-TDD-with-javascript.git
```

`>` **View Cloning Demo in VSCode:** 🎥 [Gif Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

### 3. Commands

```sh
# Install project dependencies.
npm install

# Run tests once with Jest.
npm test

# Run tests in watch mode, only affected tests.
npm test:watch

# Run all tests in watch mode.
npm test:watchAll

# Show the list of test files.
npm test:list

# Run tests and output results in JSON format.
npm test:json
```

## Contributions and Licensing

Project licensed under the MIT License. Free to use and distribute with attribution. External contributions are not accepted, but suggestions are welcome.
