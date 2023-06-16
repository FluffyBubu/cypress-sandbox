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
