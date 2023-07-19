# Vanilla Cypress with vs without custom commands

### PART 1: With custom commands 
(`cypress/e2e/login-custom-commands.cy.js`)

#### MODEL/DESIGN
Nothing fancy, Vanilla Cypress design with basic custom commands.

#### STRENGTH: 
- Can be a more efficient way to write tests for smaller to medium projects as it's easier to read and maintain while still being reusable since you can use the same custom commands in other tests.

#### CHALLENGE: 
- Finding the right balance between readability and maintainability can be tricky. Just making something readable doesn't necessarily mean it's maintainable.

- Custom commands might be easier to read, but you need to make sure that it's easy to understand what it's doing and that it's not doing too much otherwise it might be difficult to maintain.

#### BONUS THOUGHT: 
Try to see which custom commands are used in the tests and identify which ones you would have done differently. 

Maybe you would rather keep `cy.wait()` as is without creating a custom command for it (i.e. `cy.waitForApi()`) which essentially has no difference in lines of code or functionality, simply just readability?

### PART: 2 Without custom commands 
(`cypress/e2e/login-no-commands.cy.js`)


#### MODEL/DESIGN
Vanilla Cypress design with no custom commands.

#### STRENGTH: 
- This is a quick and easy way to get going especially if you're still learning the basics of Cypress or simply ensuring that your tests does what's intended before diving into something more complex

#### CHALLENGE: 
- A simple test like this may still seem fairly readable and easy to maintain, but when your tests become larger then this isn't a very efficient way to write tests. 
- Hardcoding values like username, password etc. usually aren't wise as this is firstly not very secure, and isn't maintainable in bigger problems.

#### Helpful resource:
- [Cypress.io - custom commands](https://docs.cypress.io/api/cypress-api/custom-commands)

