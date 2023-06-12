describe('Exemplo de teste Cypress', () => {
  it('Acessa o site do exemplo e verifica o título', () => {
    cy.visit('https://example.cypress.io/');

    cy.title().should('include', 'Kitchen Sink');
  });

  it('Realiza uma busca no site do exemplo', () => {
    cy.visit('https://example.cypress.io/');

    cy.get('.search-input').type('type');

    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    cy.title().should('include', 'type');
  });
});
