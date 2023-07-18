describe('Login', () => {
    beforeEach(() => {
        // Reset the database before each test via the API (check api-testing branch for more info related to interacting with the API)
        // https://github.com/FluffyBubu/cypress-sandbox/tree/api-testing
        cy.request({
            method: 'POST',
            url: '/api/reset'
        }).its('status').should('equal', 204)

        // Create a new user before each test via the API
        cy.request({
            method: 'POST',
            url: '/api/signup',
            body: {
                email: 'foo@bar.com',
                password: '123456'
            }
        }).its('status').should('equal', 201)

        cy.intercept('POST', '**/login').as('login_POST')

        cy.visit('http://localhost:3000')

        cy.get('[data-cy=login-menu]').as('loginButton').should('be.visible')
        cy.get('@loginButton').invoke('text').should('contain', 'Log in')
        cy.get('@loginButton').click()

        cy.contains('.LoginModule_title', 'Log in to your account').should('be.visible')

    })

    it('should login', () => {
        cy.get('[data-cy=login-email]').type('foo@bar.com')

        cy.get('[data-cy=login-password]').type('123456')

        cy.get('[data-cy=login]').click()

        cy.wait('@login_POST').its('response.statusCode').should('equal', 200)

        cy.contains('#loginMessage', 'User is logged in').should('be.visible')
    })

    it('should fail to login', () => {
        cy.get('[data-cy=login-email]').type('foo@bar.com' + 'invalid')

        cy.get('[data-cy=login-password]').type('123456' + 'invalid')

        cy.get('[data-cy=login]').click()

        cy.wait('@login_POST').its('response.statusCode').should('equal', 400)
    })
})