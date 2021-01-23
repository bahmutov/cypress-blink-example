/// <reference types="cypress" />

describe('TodoMVC App', () => {
  it('shows loading element', () => {
    cy.visit('/?delay=500')
    cy.get('.loading', {timeout: 800}).should('be.visible')
    cy.get('.loading').should('not.be.visible')
    cy.get('li.todo').should('have.length', 2)
  })
})
