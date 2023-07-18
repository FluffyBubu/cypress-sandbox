# Cypress with BDD (without Cucumber)

#### MODEL/DESIGN
Cypress design with BDD using Gherkin syntax (Given, When, Then), without Cucumber.

#### STRENGTH: 
- This alternative BDD design still has the benefit of being simple to read and understand using the Gherkin syntax, but without the added complexity of Cucumber and while staying within the Cypress ecosystem.
- BDD is a great way to write tests that are easy to read and to get non-technical people involved in the testing process.

#### CHALLENGE: 
- Even though this alternive BDD design solves the complexity issue of Cucumber, scenario-based tests (like Cucumber) are purposefully designed to have a tight scope in order to test a business requirement. 
- Tests don't necessarily cover all the edge cases, and you might end up with a lot of scenarios to cover all the edge cases.

 #### Learning resource:
[Walmyr Filho - Using the keywords Given When Then with Cypress but without Cucumber](https://dev.to/walmyrlimaesilv/using-the-keywords-given-when-then-with-cypress-but-without-cucumber-118p)