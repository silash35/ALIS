import { Prisma, Place } from "@prisma/client";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to create a place by UI using passed place
       * @example cy.createPlaceByUI(place)
       */
      createPlaceByUI(place: Prisma.PlaceCreateInput): void;

      /**
       * Custom command to read a place by UI using passed place
       * @example cy.createPlaceByUI(place)
       */
      readPlaceByUI(place: Place): void;

      /**
       * Custom command to update a place by UI using passed place
       * @example cy.createPlaceByUI(place)
       */
      updatePlaceByUI(place: Place, newPlace: Place): void;

      /**
       * Custom command to update a place by UI using passed place
       * @example cy.createPlaceByUI(place)
       */
      deletePlaceByUI(place: Place): void;
    }
  }
}

// Using UI
Cypress.Commands.add("createPlaceByUI", (place) => {
  cy.visit("/places/new");

  cy.get("input[name=name]").click();
  cy.get("input[name=name]").type(place.name);
  cy.get("input[name=address]").click();
  cy.get("input[name=address]").type(place.address);
  cy.get("textarea[name=description]").click();
  cy.get("textarea[name=description]").type(place.description);

  cy.get("input[name=email]").click();
  cy.get("input[name=email]").type(place.email);
  cy.get("input[name=phone]").click();
  cy.get("input[name=phone]").type(place.phone);
  cy.get("input[name=website]").click();
  cy.get("input[name=website]").type(place.website);
  cy.get("input[name=imageURL]").click();
  cy.get("input[name=imageURL]").type(place.imageURL);

  cy.get("button[type=submit]").click();
  cy.location("pathname").should("eq", "/");
});

Cypress.Commands.add("readPlaceByUI", (place) => {
  cy.visit("/");
  cy.intercept("PUT", "/api/places").as("searchPlace");

  cy.get("input[type=text]").click();
  cy.get("input[type=text]").type(place.description + "{enter}");

  cy.wait("@searchPlace");
  cy.contains(place.name).click();

  cy.location("pathname").should("contain", "locais");

  cy.contains(place.name);
  cy.contains(place.description);
  cy.contains(place.address);
  cy.contains(place.email);
  cy.contains(place.phone);
  cy.contains(place.website);
  cy.get(`img[src="${place.imageURL}"]`).should("have.attr", "alt");
});

Cypress.Commands.add("updatePlaceByUI", (place, newPlace) => {
  cy.visit("/");
  cy.intercept("PUT", "/api/places").as("searchPlace");

  cy.get("input[type=text]").click();
  cy.get("input[type=text]").type(place.description);
  cy.get("button[type=submit]").click();

  cy.wait("@searchPlace");
  cy.contains(place.name).click();

  cy.location("pathname").should("contain", "locais");

  cy.get('[data-testid="EditIcon"] > path').click();
  cy.location("pathname").should("contain", "edit");

  cy.get("input[name=name]").should("have.value", place.name);
  cy.get("input[name=address]").should("have.value", place.address);
  cy.get("textarea[name=description]").should("have.value", place.description);
  cy.get("input[name=email]").should("have.value", place.email);
  cy.get("input[name=phone]").should("have.value", place.phone);
  cy.get("input[name=website]").should("have.value", place.website);
  cy.get("input[name=imageURL]").should("have.value", place.imageURL);

  cy.get("input[name=name]").click();
  cy.get("input[name=name]").clear();
  cy.get("input[name=name]").type(newPlace.name);
  cy.get("input[name=address]").click();
  cy.get("input[name=address]").clear();
  cy.get("input[name=address]").type(newPlace.address);
  cy.get("textarea[name=description]").click();
  cy.get("textarea[name=description]").clear();
  cy.get("textarea[name=description]").type(newPlace.description);

  cy.get("input[name=email]").click();
  cy.get("input[name=email]").clear();
  cy.get("input[name=phone]").click();
  cy.get("input[name=phone]").clear();
  cy.get("input[name=website]").click();
  cy.get("input[name=website]").clear();
  cy.get("input[name=imageURL]").click();
  cy.get("input[name=imageURL]").clear();

  cy.get("button[type=submit]").click();

  cy.contains("Salvar Alterações").click();

  cy.contains(newPlace.name);
  cy.contains(newPlace.description);
  cy.contains(newPlace.address);

  cy.contains("Telefone:").should("not.exist");
  cy.contains("Email:").should("not.exist");
  cy.contains("Site:").should("not.exist");
  cy.get("img").should("not.exist");
});

Cypress.Commands.add("deletePlaceByUI", (place) => {
  cy.visit("/");
  cy.intercept("PUT", "/api/places").as("searchPlace");

  cy.get("input[type=text]").click();
  cy.get("input[type=text]").type(place.description);
  cy.get("button[type=submit]").click();

  cy.wait("@searchPlace");
  cy.contains(place.name).click();

  cy.location("pathname").should("contain", "locais");

  cy.get('[data-testid="DeleteIcon"] > path').click();
  cy.contains("Deletar").click();

  cy.intercept("PUT", "/api/places").as("searchPlace");
  cy.get("input[type=text]").click();
  cy.get("input[type=text]").type(place.description + "{enter}");

  cy.wait("@searchPlace");
  cy.contains(place.name).should("not.exist");
});

// Using API

export {};
