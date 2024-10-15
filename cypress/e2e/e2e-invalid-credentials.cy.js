describe('Go to login page', () => {
  before(() => {
    cy.visit('http://127.0.0.1:57108');
  });

  it('Should not be able to login with invalid credentials', () => {
    cy.get('.btn-close').eq(1).click();
    cy.get('#loginEmail').type('invalidemail@domain.com');
    cy.get('#loginPassword').type('InvalidPassword');
    cy.get('.btn-success').eq(1).click();
    });
});