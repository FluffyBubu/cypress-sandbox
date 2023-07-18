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