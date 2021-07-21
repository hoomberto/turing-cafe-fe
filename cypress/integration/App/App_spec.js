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

  it('User should see a grid of 9 cards with initial reservations', () => {
    cy.get('.card').should('have.length', 9)
  })


})
