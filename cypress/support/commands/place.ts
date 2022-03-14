import { Place } from "../types";
import { Place as PlaceWithId } from "@prisma/client";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to create a place using passed place
       * @example cy.createPlace(place)
       */
      createPlace(place: Place): void;

      /**
       * Custom command to update a place using passed place
       * @example cy.createPlace(place)
       */
      deletePlace(place: Place): void;
    }
  }
}

Cypress.Commands.add("createPlace", (place) => {
  cy.request("POST", "/api/protected/places", place).then((response) => {
    expect(response.status).equal(200);
  });
});

Cypress.Commands.add("deletePlace", (place) => {
  cy.request("/api/public/places").then((response) => {
    const allPlaces: PlaceWithId[] = response.body.body;

    allPlaces.forEach((requestPlace) => {
      if (requestPlace.description === place.description) {
        cy.request("DELETE", "/api/protected/place/" + requestPlace.id).then((response) => {
          expect(response.status).equal(200);
        });
      }
    });
  });
});

export {};
