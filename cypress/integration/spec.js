/// <reference types="cypress" />

describe('TodoMVC App', () => {
  Cypress._.times(20, (k) => {
    it(`shows loading element ${k}`, () => {
      console.log('>>>test', k)
      cy.intercept('/todos', {
        fixture: 'todos.json',
        delayMs: 1000,
      })
      cy.visit('/?delay=500')
      cy.get('.loading', { timeout: 800 }).should('be.visible')
      cy.get('.loading').should('not.be.visible')
      cy.get('li.todo').should('have.length', 2)
    })
  })
})
