// Functions are imported from POM files in cypress/support/POM

import LoginPage from '../support/POM/login-page'

describe('Login', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    
    beforeEach(() => {
        LoginPage.resetDbUsingApi()

        LoginPage.createUserUsingAPI(email, password)

        LoginPage.listenToApi('POST', '**/login', 'login_POST')

        LoginPage.open()

        LoginPage.openLoginModal()
    })

    it('should login', () => {
        LoginPage.loginUsingUI(email, password)

        LoginPage.waitForApi('@login_POST')

        LoginPage.checkLoginMessage('User is logged in')
    })

    it('should fail to login', () => {
        LoginPage.loginUsingUI(email + 'invalid', password + 'invalid')

        LoginPage.waitForApi('@login_POST', { status: 400 })
    })
})