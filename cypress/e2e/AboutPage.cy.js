describe('About Page', () => {
    it('should display the content of the About page', () => {
      cy.visit('../src/AboutPage/AboutPage.js'); 
      cy.get('.a').should('exist'); 
      cy.contains('Personal budgeting is a fundamental financial practice').should('exist');
    });
  });
  