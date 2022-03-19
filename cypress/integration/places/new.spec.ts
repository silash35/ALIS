import { users } from "../../fixtures/users.json";
import { places } from "../../fixtures/places.json";
import { Place } from "../../support/types";

describe("New Place Page", () => {
  it("should redirect when not logged", () => {
    cy.visit("/places/new");
    cy.location("pathname").should("equal", "/auth/signIn");
  });

  it("should load when logged", () => {
    cy.signIn(users[2]);
    cy.visit("/places/new");

    cy.contains("Adicionar novo Local");
    cy.location("pathname").should("equal", "/places/new");
  });

  it("should been able to add new Places", () => {
    cy.signIn(users[2]);

    createPlaceByUi(places[0]);
    createPlaceByUi(places[1]);

    cy.deletePlace(places[0]);
    cy.get("@placeCount").then((placeCount) => {
      expect(placeCount).equal(1);
    });
    cy.deletePlace(places[1]);
    cy.get("@placeCount").then((placeCount) => {
      expect(placeCount).equal(1);
    });
  });
});

export {};

const createPlaceByUi = (place: Place) => {
  cy.visit("/places/new");

  cy.get("input[name=name]").click();
  cy.get("input[name=name]").type(place.name);
  cy.get("input[name=address]").click();
  cy.get("input[name=address]").type(place.address);
  cy.get("textarea[name=description]").click();
  cy.get("textarea[name=description]").type(place.description);

  if (place.email) {
    cy.get("input[name=email]").click();
    cy.get("input[name=email]").type(place.email);
  }
  if (place.phone) {
    cy.get("input[name=phone]").click();
    cy.get("input[name=phone]").type(place.phone);
  }
  if (place.website) {
    cy.get("input[name=website]").click();
    cy.get("input[name=website]").type(place.website);
  }
  if (place.imageURL) {
    cy.get("input[name=imageURL]").click();
    cy.get("input[name=imageURL]").type(place.imageURL);
  }

  cy.get("button[type=submit]").click();
  cy.location("pathname").should("eq", "/");
};
