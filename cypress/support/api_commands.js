Cypress.Commands.add('api_resetDb', () => {
    Cypress.log({
        displayName: 'Reset Database'
    })

    cy.request({
        method: 'POST',
        url: '/api/reset'
    })
})

Cypress.Commands.add('api_createUser', (email, password) => {
    Cypress.log({
        displayName: 'Create User'
    })

    cy.request({
        method: 'POST',
        url: '/api/signup',
        body: { email, password }
    })
})

Cypress.Commands.add('api_login', (email, password) => {
    Cypress.log({
        displayName: 'Login using API'
    })

    cy.request({
        method: 'POST',
        url: '/api/login',
        body: { email, password },
        failOnStatusCode: false
    })
})