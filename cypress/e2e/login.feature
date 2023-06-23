    # MODEL/DESIGN
    # Cypress design with BDD using Gherkin syntax (Given, When, Then), with Cucumber.

    # DESCRIPTION
    # This is a simple Login feature with a positive and negative test scenario using BDD.
    
    # STRENGTH:
    # Tests are scenario based and written in natural language that non-technical people can understand.
    # BDD is a great way to write tests that are easy to read and understand,
    # and to get non-technical people involved in the testing process.

    # CHALLENGE:
    # BDD tests are not as flexible as other types of tests, and they can be difficult to maintain
    # due to the complexity of setting up scenarios and the number of steps involved.
    # This means that the tests don't necessarily cover all the edge cases,
    # and you might end up with a lot of scenarios to cover all the edge cases.

Feature: Login functionality

    Background: Setup Test
        Given the user is on the login page

    Scenario: Login with valid credentials
        When the user enters valid credentials
            | email       | password |
            | foo@bar.com | 123456   |
        Then the user should be logged in

    Scenario: Login with invalid credentials
        When the user enters invalid credentials
            | invEmail | invPassword |
            | foo@bar.cominvalid | 123456invalid    |
        Then the user should not be logged in
