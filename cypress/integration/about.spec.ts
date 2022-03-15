describe("About Page", () => {
  it("should load", () => {
    cy.visit("/");
    cy.contains("O que é o ALIS");
  });
});

export {};
