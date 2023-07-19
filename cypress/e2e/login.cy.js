describe('Login', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    beforeEach(() => {
        // Test cleanup
        cy.api_resetDb().its('status').should('equal', 204)

        // Test setup
        cy.api_createUser(email, password).its('status').should('equal', 201)
    })

    it('should login', () => {
        /* Actions performed via API */

        // Login with valid input via API
        cy.api_login(email, password)
            .then(({ body, status }) => {
                const { accessToken } = body

                expect(status).to.equal(200)

                // Check that the response contains an access token
                expect(body).to.have.property('accessToken')

                // Set the access token as a cookie
                cy.setCookie('trello_token', accessToken)

                // Check that the cookie was set
                cy.getCookie('trello_token').should('have.property', 'value', accessToken)
            })

        /* Actions performed via UI */

        // Navigate to home page (with cookie)
        cy.visit('/')

        // Check that the the user is logged in
        cy.getByData('logged-user').invoke('text').should('contain', email)
    })

    it('should fail to login', () => {
        /* Actions performed via API */

        // Login with invalid input via API
        cy.api_login(email + 'invalid', password + 'invalid')
            .then(({ body, status }) => {
                expect(status).to.equal(400)

                // Check that the response contains an error message
                expect(body).to.have.string('Cannot find user')
            })

        /* Actions performed via UI */

        // Navigate to home page (without cookie)
        cy.visit('/')

        // Check that the user is not logged in
        cy.getByData('login-menu').invoke('text').should('contain', 'Log in')
    })
})