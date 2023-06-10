Cypress.Commands.add('api_resetDb', () => {
    Cypress.log({ displayName: 'Reset Database' })

    cy.request({ method: 'POST', url: '/api/reset' })
        // .its('status').should('equal', 204)
})

Cypress.Commands.add('api_createUser', (email, password) => {
    Cypress.log({ displayName: 'Create User' })

    cy.request({ method: 'POST', url: '/api/signup', body: { email, password } })
            // .its('status').should('equal', 201)
})