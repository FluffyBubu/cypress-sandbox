/* 
    MODEL/DESIGN
    Cypress design with BDD using Gherkin syntax (Given, When, Then), without Cucumber.

    DESCRIPTION
    This is a simple Login feature with a positive and negative test scenario using BDD.
    
    STRENGTH: 
    This alternative BDD design still has the benefit of being simple to read and understand using the Gherkin syntax, but without the added complexity of Cucumber and while staying within the Cypress ecosystem.
    BDD is a great way to write tests that are easy to read and understand, and to get non-technical people involved in the testing process.

    CHALLENGE: 
    Even though this alternive BDD design solves the complexity issue of Cucumber, scenario-based tests (like Cucumber) are purposefully designed to have a tight scope in order to test a business requirement. 
    This means that the tests don't necessarily cover all the edge cases, and you might end up with a lot of scenarios to cover all the edge cases.
*/

// EVERYTHING BELOW THIS LINE IS A BDD EXAMPLE

/* Feature: Login functionality */

const email = Cypress.env('email')
const password = Cypress.env('password')

describe('Scenario: Login with valid credentials', () => {
    before(() => {
        cy.api_resetDb().its('status').should('equal', 204)

        cy.api_createUser(email, password).its('status').should('equal', 201)

        cy.intercept('POST', '**/login').as('login_POST')
    })

    context('Given the user is on the login page', () => {
        beforeEach(() => {
            cy.visit('/')

            cy.getByData('login-menu').as('loginButton').should('be.visible')
            cy.get('@loginButton').invoke('text').should('contain', 'Log in')
            cy.get('@loginButton').click()
    
            cy.contains('.LoginModule_title', 'Log in to your account').should('be.visible')
        })

        specify('When the user enters valid credentials, Then the user should be logged in', () => {
            cy.login_ui(email, password)
    
            cy.waitForApi('@login_POST')
    
            cy.contains('#loginMessage', 'User is logged in').should('be.visible')
        })
    })
})

describe('Scenario: Login with invalid credentials', () => {
    before(() => {
        cy.intercept('POST', '**/login').as('login_POST')
    })

    context('Given the user is on the login page', () => {
        beforeEach(() => {
            cy.visit('/')

            cy.getByData('login-menu').as('loginButton').should('be.visible')
            cy.get('@loginButton').invoke('text').should('contain', 'Log in')
            cy.get('@loginButton').click()
    
            cy.contains('.LoginModule_title', 'Log in to your account').should('be.visible')
        })

        specify('When the user enters invalid credentials, Then the user should not be logged in', () => {
            cy.login_ui(email + 'invalid', password + 'invalid')
    
            cy.waitForApi('@login_POST', { status: 400 })
        })
    })
})