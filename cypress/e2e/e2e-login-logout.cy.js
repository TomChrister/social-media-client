describe('Go to login page', () => {
  beforeEach(() => {
    // Visits this page before every test
    cy.visit('http://127.0.0.1:8080');
  });

  it('Should log in with valid credentials', () => {
    cy.get('.btn-close').eq(1).click();
    cy.get('#loginEmail').type('workflowtest2@stud.noroff.no');
    cy.get('#loginPassword').type('Workflowtest1');
    cy.get('.btn-success').eq(1).click();
  });

  it('Should not be able to login with invalid credentials', () => {
    cy.get('.btn-close').eq(1).click();
    cy.get('#loginEmail').type('invalidemail@domain.com');
    cy.get('#loginPassword').type('InvalidPassword');
    cy.get('.btn-success').eq(1).click();
  });

  it('Should log out after logging in', () => {
    cy.get('.btn-close').eq(1).click();
    cy.get('#loginEmail').type('workflowtest2@stud.noroff.no');
    cy.get('#loginPassword').type('Workflowtest1');
    cy.get('.btn-success').eq(1).click();
    cy.get('button[data-auth="logout"]').should('be.visible').click();
  });
});

