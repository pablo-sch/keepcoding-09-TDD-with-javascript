# Test-Driven Development Exercise with JavaScript

**KeepCoding Projects - Web 18**  
Check the full list of repositories and descriptions in [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Select your language

- 🇪🇸 [Spanish](README.es.md)
- 🇩🇪 [German](README.de.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Project Objective

In order to demonstrate the knowledge acquired in virtual classes, this project consists of performing testing exercises using the “jest” dependency.

<!-- ------------------------------------------------------------------------------------------- -->

## Learned and Developed Knowledge

### Testing

#### Definition and Objectives

Software testing is a fundamental process whose main purpose is to identify errors (bugs) before code is deployed to production. Its implementation pursues the following objectives:

1. **Early error detection**: Allow the identification of defects during the early stages of the development cycle, in order to minimize the cost and impact of fixes.
2. **Increased confidence in the code**: Provide greater assurance regarding the stability and functionality of the software, although no set of tests can guarantee a complete absence of failures.
3. **Support in deployment decision-making**: Facilitate the assessment of whether the software is ready to incorporate new features or, conversely, whether it is preferable to delay the release to correct issues.
4. **Promotion of code quality and cleanliness**: Encourage developers to write modular and well-structured code, since more readable and organized code is easier to test and maintain.

#### Role in Project Management (PM) and DevOps

Software testing must be integrated into any development methodology, whether Waterfall, Agile, or DevOps. In particular, within a DevOps environment, testing is part of a continuous delivery loop (known as the “infinite loop”) and is usually automated to ensure fast and reliable deployments.

- In **Waterfall** methodologies, testing phases are planned after the completion of each design or development stage.
- In **Agile** methodologies, testing is incorporated iteratively into each sprint, fostering constant feedback.
- In **DevOps** environments, test automation allows the software to be validated with each change in the repository, maintaining quality throughout the entire lifecycle.

### Types of Testing

#### 1. External Tests (End-to-End Visual)

1. **Manual**  
   Involve a tester following a predefined set of steps and visually verifying the correct operation of the user interface. This approach helps detect usability and flow issues that sometimes escape automated tests.

2. **Automated**  
   Based on recording and replaying user interactions with the application (clicks, text entries, navigation, etc.). These tests are scheduled to run periodically to validate that the interface maintains its expected behavior after code changes.

#### 2. Functional Tests

1. **Unit**  
   Evaluate individual units of code (functions, classes, or modules) in isolation. Each test should verify a single aspect of the unit’s behavior under controlled conditions.

2. **Integration**  
   Verify that multiple components, modules, or services work correctly together. For example, in a backend context, this involves making HTTP requests to the API and validating the responses received, ensuring that each layer (controller, service, database) interacts as intended.

3. **End-to-End (E2E)**  
   Simulate complete user flows, such as login processes, purchase workflows, or any other typical application journey. These tests ensure that the application, in its entirety, responds appropriately to user actions. Due to their complexity in creation and maintenance, it is recommended to limit their use to the most critical scenarios.

#### 3. Non-Functional Tests

1. **Security**  
   Aim to detect vulnerabilities in dependencies and packages, as well as ensure proper encryption and handling of sensitive data. They include penetration testing, dependency audits, and authentication/authorization checks.

2. **Performance**  
   Evaluate metrics such as Time To First Byte (TTFB), the application’s capacity to handle simultaneous load, and the calculation of operating costs based on usage. These tests are essential for ensuring optimal performance in high-concurrency production environments.

3. **Usability**  
   Analyze real user interactions with the application in order to identify potential difficulties or barriers in navigation. Usability studies, user testing, and interaction metrics analysis can be employed.

4. **Accessibility**  
   Verify that the interface is usable for people with disabilities, ensuring that all visual elements are correctly rendered and that alternatives exist for keyboard navigation or screen readers. Color contrast and semantic HTML adequacy are also checked.

### Support Tools

#### Basic Requirements

- **Deep knowledge of the programming language** to be tested.
- **Familiarity with the existing code**, as well as the application’s architecture.
- **Understanding of the functionalities to be tested**, including requirements and acceptance criteria.

#### Recommended Software

1. **Unit Testing**

   - **Jasmine**: Testing framework for JavaScript.
   - **Jest**: Testing tool developed by Facebook, widely used in React and Node.js projects.
   - **Mocha + Chai**: Combination of runner (Mocha) and assertion library (Chai) for Node.js.

2. **Functional Testing**

   - **Supertest**: Library for making HTTP requests and validating responses in Node.js environments.

3. **E2E Testing**
   - **Selenium**: Framework that allows browser automation.
   - **Puppeteer**: High-level library to control Chrome/Chromium via the DevTools Protocol.
   - **Protractor**: Solution specifically for Angular projects.
   - **Playwright**: Cross-platform tool for reliable testing in web environments (Chrome, Firefox, Safari).

## Jest

Jest is a unit testing framework developed by Facebook, designed to be fast, extensible, and easy to configure. Its main features include:

1. **Configuration and Settings**

   - Allows defining configuration files (`jest.config.js`) to establish search patterns, directory exclusions, code transformations (e.g., Babel), and module mapping.

2. **Hooks (beforeEach, afterEach, etc.)**

   - Provides lifecycle functions to set up the environment before each test (`beforeEach`) and perform cleanup after execution (`afterEach`). It also includes `beforeAll` and `afterAll` for suite-level actions.

3. **Exception Handling**

   - Supports assertions that expect certain functions to throw exceptions (`toThrow()`) and captures asynchronous errors.

4. **Promise Testing**

   - Facilitates validation of resolved and rejected promises using methods like `resolves` and `rejects`, as well as the `async/await` syntax.

5. **Mocking Modules and Functions**

   - Enables simulating dependencies and replacing real implementations with mocks, which makes it possible to isolate the unit under test and control the behavior of external modules.

6. **Code Coverage**
   - Generates coverage reports that indicate which lines, branches, and functions have been executed during tests. This helps quantify test effectiveness and pinpoint untested areas.

## TDD (Test Driven Development)

### Definition

Test Driven Development (TDD) is an iterative methodology in which automated tests are written before implementing functionality. The basic cycle, known as **Red–Green–Refactor**, consists of:

1. **Red**: Write a test that fails (since the functionality does not yet exist).
2. **Green**: Implement the minimal functionality required for the test to pass.
3. **Refactor**: Improve the code without changing its behavior, ensuring that all tests continue to pass.

This cycle repeats continuously for each new requirement or change in the system.

#### TDD Laws (Robert C. Martin)

1. **Do not write production code without first writing a test that fails.**
2. **Do not write more than one unit test that is sufficient to cause a single failure.** (Even a compilation error counts as a failure.)
3. **Do not write more code than is necessary to make the test pass.**

#### Additional Rules

1. **Clearly specify the functionality requirements**: Without precise definitions, the TDD process loses effectiveness.
2. **Consider all possible cases** (including successes and failures) within the acceptance criteria.
3. **Design each test to verify only the logic of the unit under test**, using mocks when necessary to isolate it from external dependencies.
4. **Determine exactly what aspect is being tested in each test**, avoiding covering multiple criteria in a single test.
5. **The number of tests is not predetermined**, but depends on the scenarios covered by the implemented functionality.

#### SOLID Principles Applied in TDD

- **S – Single Responsibility Principle**: Each class or module should have only one responsibility.
- **O – Open/Closed Principle**: Code should be extendable without modifying its existing implementation.
- **L – Liskov Substitution Principle**: Any derived type must be substitutable for its base type without altering the correct behavior of the program.
- **I – Interface Segregation Principle**: Do not force a class to depend on interfaces it does not use.
- **D – Dependency Inversion Principle**: Implementation details should depend on abstractions, not the other way around.

#### Benefits of TDD

- Improves overall code quality by forcing developers to think about requirements before writing implementation.
- Promotes requirement-driven design, reducing unnecessary features.
- Produces simpler code focused on minimal viable functionality.
- Reduces redundancy and facilitates early error identification.
- Decreases debugging time and increases team productivity.
- Contributes to a codebase less prone to future defects.

#### Drawbacks of TDD

- Requires a steep learning curve for developers inexperienced with this methodology.
- There is a risk of losing the big-picture perspective by focusing excessively on unit tests and specific cases.
- If requirements are not well-defined, tests may be constructed incorrectly.
- Integrating external services (databases, APIs) can become complex if mocks and stubs are not handled properly.
- Adoption in frontend development can be more challenging, as focus often shifts to business logic rather than the user interface.
- Requires a significant investment of time and resources at the beginning of the project.

## Related Approaches

### BDD (Behavior Driven Development)

Behavior Driven Development (BDD) extends TDD concepts through a shared language between technical teams and business stakeholders. Acceptance tests, written in a natural language style (such as Gherkin), describe the expected system behavior from the user’s perspective.

- **Main Tools**:

  - **Cucumber**: Framework that interprets Gherkin files to perform automated tests.
  - **Gherkin**: Plain-text syntax based on keywords (Given, When, Then) to describe behavior scenarios.

- **Advantages**:

  1. Defines behaviors instead of specific tests, fostering collaboration among developers, testers, and business users.
  2. Improves communication and mutual understanding by using a natural language to describe features.
  3. Presents a smaller learning curve than pure TDD, since it does not focus solely on unit tests.
  4. Facilitates the adoption of Agile methodologies by providing a framework for defining acceptance criteria before implementation begins.
  5. Allows reaching a consensus on the functionalities to be developed before writing code.

- **Disadvantages**:
  1. There is a risk of omitting relevant cases if behavior scenarios are not defined exhaustively.
  2. Maintaining behavior tests for databases and rich frontend applications can become complex.
  3. Requires a medium-to-high time investment to write and maintain Gherkin scripts.
  4. Demands constant communication among different roles (developers, testers, and clients), which can slow down teams not accustomed to this approach.

### ATDD (Acceptance Test Driven Development)

Acceptance Test Driven Development (ATDD) is similar to BDD but places greater emphasis on ensuring that the correct objectives are met from the project’s outset.

- **Main Objective**: Ensure the team works only on necessary features, avoiding effort on unneeded components.
- **Advantages**:

  1. Promotes a flexible design prepared for future changes, without conditioning the solution to the UI or database.
  2. Provides early feedback on the fulfillment of project objectives.
  3. Allows the Product Owner to review and validate acceptance criteria, increasing confidence in the development team.

- **Operation Mode**: Based on defining acceptance tests that describe the desired system behavior in a comprehensible way for all involved parties. Once validated, the development team implements the functionality iteratively, ensuring that these tests pass before proceeding to new tasks.

<!-- ------------------------------------------------------------------------------------------- -->

## Project Details

TODO

<!-- ------------------------------------------------------------------------------------------- -->

## Technologies Used

### Languages

- **JavaScript**: To add interactivity and dynamic features to the website, improving the user experience with functionalities such as form validation, animations, and event handling.

### Dependencies

- babel
- jest
- axios

<!-- ------------------------------------------------------------------------------------------- -->

## Installation and Usage Instructions

### Software Requirements

- **[Git](https://git-scm.com/downloads)** (tested on version **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (tested on version **1.99.0**)

### Cloning the Repository

```bash
`git clone https://github.com/pablo-sch/keepcoding-09-TDD-with-javascript.git`
```

![Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

<!-- ------------------------------------------------------------------------------------------- -->

## Project Preview

None

<!-- ------------------------------------------------------------------------------------------- -->

## Contributions and Licensing

This project does not include external contributions or licenses.
