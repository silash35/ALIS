describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("/");

    cy.contains("Bem vindo ao alis");
  });
});
