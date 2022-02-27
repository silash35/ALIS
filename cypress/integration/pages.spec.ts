describe("Load Pages", () => {
  it("should load the Home Page", () => {
    const homePageText = "Bem vindo ao alis";

    cy.visit("/");
    cy.contains(homePageText);

    cy.get("header").contains("a").click();
    cy.contains(homePageText);

    cy.get("header").contains("Inicio").click();
    cy.contains(homePageText);

    cy.get("header").contains("Inicio").should("have.attr", "id");
    cy.get("header").contains("Sobre").should("not.have.attr", "id");
    cy.get("header").contains("Adicionar Local").should("not.have.attr", "id");
  });

  it("should load the About Page", () => {
    const aboutPageText = "O que é o ALIS";

    cy.visit("/");
    cy.get("header").contains("Sobre").click();
    cy.contains(aboutPageText);

    cy.get("header").contains("Inicio").should("not.have.attr", "id");
    cy.get("header").contains("Sobre").should("have.attr", "id");
    cy.get("header").contains("Adicionar Local").should("not.have.attr", "id");
  });

  it("should load the Submit Page", () => {
    const SubmitPageText = "Adicionar novo Local";

    cy.visit("/");
    cy.get("header").contains("Adicionar Local").click();
    cy.contains(SubmitPageText);

    cy.get("header").contains("Inicio").should("not.have.attr", "id");
    cy.get("header").contains("Sobre").should("not.have.attr", "id");
    cy.get("header").contains("Adicionar Local").should("have.attr", "id");
  });
});

export {};
