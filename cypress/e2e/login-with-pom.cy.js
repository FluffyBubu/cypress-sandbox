/* 
    MODEL/DESIGN
    Cypress design with Page Object Model (POM)

    DESCRIPTION
    This is a simple Login feature with a positive and negative test case using Page Object Model (POM).
    
    STRENGTH: 
    POM is a design pattern that can be used to make tests much more readable and reusable. You also have the benefit of auto-complete in your IDE.

    CHALLENGE: 
    The major drawbacks of POM is firstly, it can be a bit more difficult to maintain since you need to jump between files to understand what's happening.
    Secondly, debugging can be tricky since the added layer of abstraction means the error messages might not be as clear as when using a more vanilla Cypress design.
    POM definitely still has its place, but it's important to understand the tradeoffs and when to use it.
*/

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