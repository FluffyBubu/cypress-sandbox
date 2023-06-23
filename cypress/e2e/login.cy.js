/* 
    MODEL/DESIGN
    Cypress design with API and UI actions.

    DESCRIPTION
    This is a simple Login feature with a positive and negative test case using both API and UI actions.
    The API is used to clean up the database and to create a user.
    It is also used to perform the login action.
    The UI is used to check that the user is logged in or not.
    
    STRENGTH: 
    This design can be speed up your tests drastically by using API calls to perform actions 
    that would otherwise take a long time to perform via UI.

    CHALLENGE: 
    You need to be sure that you understand how to use your API and have placed the correct assertions
    in order to avoid false positives (flaky tests).
*/

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