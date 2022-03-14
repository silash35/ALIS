describe("Load Pages", () => {
  it("should load the Home Page", () => {
    const homePageText = "Bem vindo ao alis";

    cy.contains(homePageText);

    cy.get("header").contains("a").click();
    cy.contains(homePageText);

    cy.get("header").contains("Criar Conta");
    cy.get("header").contains("Fazer Login");
  });
});

export {};
