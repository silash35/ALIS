import { users } from "../fixtures/users.json";
import { places } from "../fixtures/places.json";

describe("Home Page", () => {
  before(() => {
    cy.signIn(users[2]);
    cy.createPlace(places[0]);
    cy.signOut();
  });

  it("should load", () => {
    const homePageText = "Bem vindo ao alis";
    cy.contains("Bem vindo ao alis");
  });

  it("should not be logged", () => {
    cy.get("header").contains("Criar Conta");
    cy.get("header").contains("Fazer Login");
    cy.get("[data-cy=avatar]").should("not.exist");
  });

  it("should be logged", () => {
    cy.signIn(users[2]);
    cy.get("header").contains("Criar Conta").should("not.exist");
    cy.get("header").contains("Fazer Login").should("not.exist");
    cy.get("[data-cy=avatar]");
    cy.signOut();
  });

  it("should search", () => {
    cy.intercept("POST", "/api/public/places").as("searchPlace");
    cy.get("input[type=text]").click();
    cy.get("input[type=text]").type(places[0].description + "{enter}");
    cy.wait("@searchPlace");

    cy.get("h2").first().contains(places[0].name);
  });

  after(() => {
    cy.signIn(users[2]);
    cy.deletePlace(places[0]);
    cy.signOut();
  });
});

export {};
