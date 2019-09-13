describe('The Home Page', () => {
  it('successfully loads data for locations with registered doctors', () => {
    cy.visit('/');
    cy.get('[data-cy=search]')
      .type('new york')
      .type('{enter}')
      .should('have.value', 'new york');
  });
});
