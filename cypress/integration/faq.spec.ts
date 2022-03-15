describe("Faq Page", () => {
  it("should load", () => {
    cy.visit("/");
    cy.contains("Perguntas frequentes");
  });
});

export {};
