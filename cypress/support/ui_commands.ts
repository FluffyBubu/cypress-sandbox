/* Import this file in cypress/support/e2e.js */

Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-cy=${selector}]`)
})

Cypress.Commands.add('login_ui', (email, password) => {
    Cypress.log({ displayName: 'Login using UI' })
    
    // Fill email
    cy.getByData('login-email').type(email)

    // Fill password
    cy.getByData('login-password').type(password)

    // Click login button
    cy.getByData('login').click()
})