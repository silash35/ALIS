/*
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

  it("should load the About Page", () => {
    const aboutPageText = "O que é o ALIS";

    cy.get("header").contains("Sobre").click();
    cy.contains(aboutPageText);

    cy.get("header").contains("Inicio").should("not.have.attr", "id");
    cy.get("header").contains("Sobre").should("have.attr", "id");
    cy.get("header").contains("Fazer Login").should("not.have.attr", "id");
  });

  it("should load the Login Page", () => {
    const loginPageText = "Faça Login com o Google";

    cy.get("header").contains("Fazer Login").click();
    cy.contains(loginPageText);

    cy.get("header").should("not.exist");
  });
});
*/
export {};
