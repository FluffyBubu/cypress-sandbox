import { Given, When, Then, Before, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.api_resetDb().its('status').should('equal', 204)

  cy.api_createUser(Cypress.env('email'), Cypress.env('password')).its('status').should('equal', 201)

  cy.intercept('POST', '**/login').as('login_POST')
})

Given("the user is on the login page", () => {
  cy.visit('/')

  cy.getByData('login-menu').as('loginButton').should('be.visible')
  cy.get('@loginButton').invoke('text').should('contain', 'Log in')
  cy.get('@loginButton').click()

  cy.contains('.LoginModule_title', 'Log in to your account').should('be.visible')
})

When("the user enters valid credentials", (datatable: DataTable) => {
  datatable.hashes().forEach((element) => {
    cy.login_ui(element.email, element.password)
  })
})

Then("the user should be logged in", () => {
  cy.waitForApi('@login_POST', { status: 200 })

  cy.contains('#loginMessage', 'User is logged in').should('be.visible')
})

When("the user enters invalid credentials", (datatable: DataTable) => {
  datatable.hashes().forEach((element) => {
    cy.login_ui(element.invEmail, element.invPassword)
  })
})

Then("the user should not be logged in", () => {
  cy.waitForApi('@login_POST', { status: 400 })
})
