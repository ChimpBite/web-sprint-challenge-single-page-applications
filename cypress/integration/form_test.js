describe('Order Creation', function () {
  it('Name Input Value', () => {
    cy.visit('http://localhost:3000/Pizza');
    cy.get('[data-test="name"] input')
      .type('Name')
      .should('have.value', 'full name');
  });
  it('Select Size', () => {
    cy.visit('http://localhost:3000/Pizza');
    cy.get('select').select('Large').should('have.value', 'Large');
  });
  it('Sauce Select', () => {
    cy.visit('http://localhost:3000/Pizza');
    cy.get('[type="radio"] input').check().should('be.checked');
  });
  it('Toppings', () => {
    cy.visit('http://localhost:3000/Pizza').should('be.checked');
  });
  it('Check Submission Validation', () => {
    cy.visit('http://localhost:3000/Pizza');
    cy.get('#submit').click();
  });
});
