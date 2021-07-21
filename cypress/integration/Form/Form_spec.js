describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('User should see Form component on page load', () => {
    cy.get('form')
  })

  it('User should be able to enter relevant data to input fields and submit a new reservation', () => {
    cy.get('#name').type('Bobby')
    cy.get('#date').type('07/21')
    cy.get('#time').type('8')
    cy.get('#number').type('7')
    cy.get('#submitBtn').click()
    cy.get('.card').should('have.length', 10)
  })

  it('User should not be able to submit form if all fields are not filled', () => {
    cy.get('#name').type('Bobby')
    cy.get('#date').type('07/21')
    cy.get('#number').type('7')
    cy.get('#submitBtn').click()
    cy.get('.card').should('have.length', 9)
  })

})
