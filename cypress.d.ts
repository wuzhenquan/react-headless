// Importing the mount function from cypress/react.
import { mount } from 'cypress/react'

// opens a new module in the global namespace
declare global {
  // declares a namespace Cypress inside the global module
  namespace Cypress {
    // declares an interface Chainable inside the Cypress namespace
    // , which represents a chainable command in Cypress.
    interface Chainable {
      mount: typeof mount
    }
  }
}