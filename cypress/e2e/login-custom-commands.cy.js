

describe('Login', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    beforeEach(() => {
        // Reset the database before each test via the API (check api-testing branch for more info related to interacting with the API)
        // https://github.com/FluffyBubu/cypress-sandbox/tree/api-testing
        cy.api_resetDb().its('status').should('equal', 204)

        // Create a new user before each test via the API
        cy.api_createUser(email, password).its('status').should('equal', 201)

        cy.intercept('POST', '**/login').as('login_POST')

        cy.visit('/')

        cy.getByData('login-menu').as('loginButton').should('be.visible')
        cy.get('@loginButton').invoke('text').should('contain', 'Log in')
        cy.get('@loginButton').click()

        cy.contains('.LoginModule_title', 'Log in to your account').should('be.visible')

    })

    it('should login', () => {
        cy.login_ui(email, password)

        cy.waitForApi('@login_POST')

        cy.contains('#loginMessage', 'User is logged in').should('be.visible')
    })

    it('should fail to login', () => {
        cy.login_ui(email + 'invalid', password + 'invalid')

        cy.waitForApi('@login_POST', { status: 400 })
    })
})