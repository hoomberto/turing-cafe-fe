describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User should be able to enter relevant data to input fields and submit a new reservation', () => {
    cy.submitNewRes()
    cy.get('.card').should('have.length', 10)
  })

  it('Input values should be equal to what they have currently typed in', () => {
    cy.get('#name').type('Bobby').should('have.value', 'Bobby')
    cy.get('#date').type('07/21').should('have.value', '07/21')
    cy.get('#time').type('8').should('have.value', '8')
    cy.get('#number').type('7').should('have.value', '7')
  })

  

})
