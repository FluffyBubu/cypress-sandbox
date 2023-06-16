/* Import this file in cypress/support/e2e.js */

Cypress.Commands.add('api_resetDb', () => {
    Cypress.log({ displayName: 'Reset Database' })

    cy.request({ method: 'POST', url: '/api/reset' })
})

Cypress.Commands.add('api_createUser', (email, password) => {
    Cypress.log({ displayName: 'Create User' })

    cy.request({ method: 'POST', url: '/api/signup', body: { email, password } })
})

Cypress.Commands.add('waitForApi', (alias, options) => {
    Cypress.log({ displayName: 'Wait for API Response' })

    const status = options?.status || 200

    cy.wait(alias).its('response.statusCode').should('equal', status)
})