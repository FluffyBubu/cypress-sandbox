/* 
    MODEL/DESIGN
    Vanilla Cypress design with custom commands (cypress/support/ui_commands.js and cypress/support/api_commands.js).

    DESCRIPTION
    This is a simple Login feature with a positive and negative test case using variables and custom commands to make the tests more readable and maintainable.
    
    STRENGTH: 
    This can be a more efficient way to write tests as it's easier to read and maintain while also being more reusable since you can use the same custom commands in other tests.

    CHALLENGE: 
    Finding the right balance between readability and maintainability can be tricky. Just making something readable doesn't necessarily mean it's maintainable. 
    Custom commands might be easier to read, but you need to make sure that it's easy to understand what it's doing and that it's not doing too much otherwise it might be hard to maintain.
    Try to check which custom commands are used below and identify which ones you would have done differently. 
    Maybe you would rather keep cy.wait() as is without creating a custom command for it (i.e. cy.waitForApi()) which essentially has no difference in lines of code or functionality, simply just readability?
*/

describe('Login', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.api_resetDb().its('status').should('equal', 204)

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