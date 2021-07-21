describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('User should see header with name of cafe', () => {
    cy.contains('Turing Cafe Reservations')
  })

  it('User should see Form component on page load', () => {
    cy.get('form')
  })

  it('User should see card/cards displaying reservation information if there are reservations', () => {
    if (!cy.get('.card')) {
      cy.submitNewRes();
      cy.get('.card').should('have.length', 1)
    }

    cy.get('.card').contains('Cancel')
  })

  it('User can click on menu button to view menu', () => {
    cy.get('.menu-btn').click()
    cy.url().should('eq','http://localhost:3000/menu')
  })

  it('User can go back home from menu page', () => {
    cy.get('.menu-btn').click()
    cy.get('.back-btn').click()
    cy.url().should('eq','http://localhost:3000/')
  })

  it('User can go back and forwards between pages with browser back and forth buttons', () => {
    cy.get('.menu-btn').click()
    cy.get('.back-btn').click()
    cy.go('forward')
    cy.url().should('eq','http://localhost:3000/')
    cy.go('back')
    cy.url().should('eq','http://localhost:3000/menu')
  })

})
