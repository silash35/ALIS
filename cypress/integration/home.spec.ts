describe("Load Pages", () => {
  it("should load the Home Page", () => {
    const homePageText = "Bem vindo ao alis";

    cy.contains(homePageText);

    cy.get("header").contains("a").click();
    cy.contains(homePageText);

    cy.get("header").contains("Inicio").click();
    cy.contains(homePageText);

    cy.get("header").contains("Inicio").should("have.attr", "id");
    cy.get("header").contains("Sobre").should("not.have.attr", "id");
    cy.get("header").contains("Fazer Login").should("not.have.attr", "id");
  });
});

export {};
