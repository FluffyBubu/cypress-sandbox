describe('Login', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    beforeEach(() => {
        // Test cleanup
        cy.api_resetDb().its('status').should('equal', 204)

        // Test setup
        cy.api_createUser(email, password).its('status').should('equal', 201)

        // Listen for API calls
        cy.intercept('POST', '**/login').as('login_POST')

        // Visit homepage
        cy.visit('/')

        // Check that the login button is displayed
        cy.get('[data-cy="login-menu"]').as('loginButton').should('be.visible')
        cy.get('@loginButton').invoke('text').should('contain', 'Log in')

        // Click the login button
        cy.get('@loginButton').click()

        // Check that the login form is displayed
        cy.contains('.LoginModule_title', 'Log in to your account').should('be.visible')

    })

    it('should login', () => {
        // Login with valid input
        cy.login_ui(email, password)

        // Check API call
        cy.wait('@login_POST').its('response.statusCode').should('equal', 200)

        // Check that the login message is visible
        cy.contains('#loginMessage', 'User is logged in').should('be.visible')
    })

    it('should fail to login', () => {
        // Login with invalid input
        cy.login_ui(email + 'invalid', password + 'invalid')

        // Check API call
        cy.wait('@login_POST').its('response.statusCode').should('equal', 400)
    })
})