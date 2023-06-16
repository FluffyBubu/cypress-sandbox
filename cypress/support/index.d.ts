declare namespace Cypress {
    interface Chainable {
        api_resetDb(): Chainable<any>

        api_createUser(email: string, password: string): Chainable<any>

        getByData(dataTestAttribute: string): Chainable<any>

        login_ui(email: string, password: string): Chainable<any>

        waitForApi(alias: string, options?: any): Chainable<any>
    }
  }