/// <reference types="cypress" />

describe('TodoMVC App', () => {
  it('shows loading element', () => {
    cy.visit('/')
    cy.get('.loading').should('be.visible')
    cy.get('.loading').should('not.be.visible')
  })
})
