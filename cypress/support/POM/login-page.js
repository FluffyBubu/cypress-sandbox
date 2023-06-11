/* Import directly into a test file or e2e.js file if you want all tests to access the functions */

class LoginPage {
    resetDbUsingApi() {
        cy.request({
            method: 'POST',
            url: '/api/reset'
        }).its('status').should('equal', 204)
    }

    createUserUsingAPI(email, password) {
        cy.request({
            method: 'POST',
            url: '/api/signup',
            body: {
                email,
                password
            }
        }).its('status').should('equal', 201)
    }

    open(baseUrl) {
        const url = baseUrl || 'http://localhost:3000'

        cy.visit(url)
    }

    openLoginModal() {
        cy.get('[data-cy=login-menu]').as('loginButton').should('be.visible')
        cy.get('@loginButton').invoke('text').should('contain', 'Log in')
        cy.get('@loginButton').click()

        cy.contains('.LoginModule_title', 'Log in to your account').should('be.visible')
    }

    loginUsingUI(email, password) {
        cy.get('[data-cy=login-email]').type(email)

        cy.get('[data-cy=login-password]').type(password)

        cy.get('[data-cy=login]').click()
    }

    listenToApi(method, url, alias) {
        cy.intercept(method, url).as(alias)
    }

    waitForApi(alias, options) {
        const status = options?.status || 200

        cy.wait(alias).its('response.statusCode').should('equal', status)
    }

    checkLoginMessage(message) {
        cy.contains('#loginMessage', message).should('be.visible')
    }
}

export default new LoginPage()