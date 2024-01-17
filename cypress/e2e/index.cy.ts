import { users } from "../fixtures/users.json";
import { places } from "../fixtures/places.json";

describe("Home Page", () => {
  it("should load", () => {
    cy.visit("/");
    cy.get("button").contains("Entendi").click();
    cy.contains("Bem vindo ao alis");
  });

  it("should search", () => {
    cy.signIn(users[2]);
    cy.createPlace(places[0]);
    cy.signOut();

    cy.visit("/");
    cy.get("button").contains("Entendi").click();
    cy.intercept("POST", "/api/public/places").as("searchPlace");
    cy.get("input[type=text]").click();
    cy.get("input[type=text]").type(places[0].description + "{enter}");
    cy.wait("@searchPlace");
    cy.get("h2").first().contains(places[0].name);
  });

  it("should change Theme", () => {
    cy.visit("/");
    cy.get("button").contains("Entendi").click();

    cy.get("body").should("have.class", "light");
    cy.get("body").should("not.have.class", "dark");
    cy.get(".MuiSwitch-input").uncheck();
    cy.get("body").should("not.have.class", "light");
    cy.get("body").should("have.class", "dark");
    cy.get(".MuiSwitch-input").check();
    cy.get("body").should("have.class", "light");
    cy.get("body").should("not.have.class", "dark");
  });

  after(() => {
    cy.signIn(users[2]);
    cy.deletePlace(places[0]);
    cy.signOut();
  });
});

export {};
