/* 
    MODEL/DESIGN
    Vanilla Cypress design with no custom commands.

    DESCRIPTION
    This is a simple Login feature with a positive and negative test case using the most basic Cypress design.
    
    STRENGTH: 
    This is a quick and easy way to get going especially if you're still learning the basics of Cypress or simply ensuring that your tests does what's intended.

    CHALLENGE: 
    A simple test like this may still seem fairly readable and easy to maintain, but when your tests become larger then this isn't a very efficient way to write tests. 
    Hardcoding values like username, password etc. usually aren't wise.
*/

describe('Login', () => {
    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: '/api/reset'
        }).its('status').should('equal', 204)


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