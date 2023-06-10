import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    env: {
      email: 'foo@bar.com',
      password: '123456'
    },
  },
})
