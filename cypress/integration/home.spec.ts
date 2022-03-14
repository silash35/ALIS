import { users } from "../fixtures/users.json";
import { places } from "../fixtures/places.json";

describe("Home Page", () => {
  before(() => {
    cy.signIn(users[2]);
    cy.createPlace(places[0]);
    cy.signOut();
  });

  it("should load", () => {
    cy.contains("Bem vindo ao alis");
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
