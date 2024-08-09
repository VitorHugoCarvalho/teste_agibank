// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('searchFirstCard', (text) => { 
    cy.get('a[aria-label="Link do ícone de pesquisa"]').should('be.visible').click({force: true})
    cy.get('#search-field').should('be.visible').type(`${text}{enter}`,{force: true})
    cy.get('main>div>article div.post-thumb-img-content').should('be.visible')
    cy.get('main>div>article div.post-thumb-img-content').first().click()
    cy.contains(`${text}`).should("be.visible")
 })