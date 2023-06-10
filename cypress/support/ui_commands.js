Cypress.Commands.add('login_ui', (email, password) => {
    Cypress.log({ displayName: 'Login using UI' })
    
    // Fill email
    cy.get('[data-cy="login-email"]').type(email)

    // Fill password
    cy.get('[data-cy="login-password"]').type(password)

    // Click login button
    cy.get('[data-cy="login"]').click()
})