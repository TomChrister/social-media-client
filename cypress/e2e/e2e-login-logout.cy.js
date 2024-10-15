describe('Go to login page', () => {
  before(() => {
    cy.visit('http://127.0.0.1:57108');
  });

  it('Should log in with valid credentials', () => {
    cy.get('.btn-close').eq(1).click();
    cy.wait(500);

    cy.get('#loginEmail').type('workflowtest2@stud.noroff.no', { delay: 100 });
    cy.wait(500);

    cy.get('#loginPassword').type('Workflowtest1', { delay: 100 });
    cy.wait(1000);

    cy.get('.btn-success').eq(1).click();
    cy.wait(2500);

    cy.get('button[data-auth="logout"]').should('be.visible').click();
  });
});

