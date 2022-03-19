describe("About Page", () => {
  it("should load", () => {
    cy.visit("/about");
    cy.contains("O que é o ALIS");
  });
});

export {};
