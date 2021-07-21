describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('User should see Form component on page load', () => {
    cy.get('form')
  })
  
})
