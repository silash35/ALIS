describe("Faq Page", () => {
  it("should load", () => {
    cy.visit("/faq");
    cy.contains("Perguntas frequentes");
  });
});

export {};
