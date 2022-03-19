import { users } from "../../fixtures/users.json";
import { places } from "../../fixtures/places.json";
import { Place } from "../../support/types";
import { Place as PlaceWithId } from "@prisma/client";

describe("Place Page", () => {
  it("should load", () => {
    cy.signIn(users[2]);
    cy.createPlace(places[0]);
    cy.signOut();
    cy.getPlaceId(places[0]);

    cy.get("@placeId").then((placeID) => {
      cy.visit("/places/" + placeID);
      readPlaceByUi(places[0]);

      cy.signIn(users[2]);
      cy.request("POST", "/api/protected/place/" + placeID, { place: places[1] }).then(
        (response) => {
          expect(response.status).equal(200);

          cy.visit("/places/" + placeID);
          readPlaceByUi(places[1]);
        }
      );
    });

    cy.deletePlace(places[1]);
  });

  it("should only load edit buttons when user is the creator of the place", () => {
    cy.signIn(users[2]);
    cy.createPlace(places[0]);
    cy.signOut();
    cy.getPlaceId(places[0]);

    cy.get("@placeId").then((placeID) => {
      cy.visit("/places/" + placeID);
      cy.get("[data-testid=EditIcon]").should("not.exist");
      cy.get("[data-testid=DeleteIcon]").should("not.exist");

      cy.signIn(users[3]);
      cy.visit("/places/" + placeID);
      cy.get("[data-testid=EditIcon]").should("not.exist");
      cy.get("[data-testid=DeleteIcon]").should("not.exist");
      cy.signOut();

      cy.signIn(users[2]);
      cy.visit("/places/" + placeID);
      cy.get("[data-testid=EditIcon]").should("exist");
      cy.get("[data-testid=DeleteIcon]").should("exist");
    });

    cy.deletePlace(places[0]);
  });
});

export {};

const readPlaceByUi = (place: Place) => {
  cy.contains(place.name);
  cy.contains(place.description);
  cy.contains(place.address);

  if (place.imageURL) cy.get(`img[src="${place.imageURL}"]`).should("have.attr", "alt");

  if (place.email) {
    cy.contains(place.email);
  } else {
    cy.contains("p", "Email:").should("not.exist");
  }

  if (place.phone) {
    cy.contains(place.phone);
  } else {
    cy.contains("p", "Telefone:").should("not.exist");
  }

  if (place.website) {
    cy.contains(place.website);
  } else {
    cy.contains("p", "Site:").should("not.exist");
  }
};
