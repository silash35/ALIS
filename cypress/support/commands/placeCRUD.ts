import { Place } from "../types";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to create a place using passed place
       * @example cy.createPlace(place)
       */
      createPlace(place: Place): void;

      /**
       * Custom command to read a place using passed place
       * @example cy.createPlace(place)
       */
      readPlace(place: Place): void;

      /**
       * Custom command to update a place using passed place
       * @example cy.createPlace(place)
       */
      updatePlace(place: Place, newPlace: Place): void;

      /**
       * Custom command to update a place using passed place
       * @example cy.createPlace(place)
       */
      deletePlace(place: Place): void;
    }
  }
}

Cypress.Commands.add("createPlace", (place) => {
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
});

Cypress.Commands.add("readPlace", (place) => {
  cy.visit("/");
  cy.intercept("PUT", "/api/public/places").as("searchPlace");

  cy.get("input[type=text]").click();
  cy.get("input[type=text]").type(place.description + "{enter}");

  cy.wait("@searchPlace");
  cy.contains(place.name).click();

  cy.location("pathname").should("contain", "locais");

  cy.contains(place.name);
  cy.contains(place.description);
  cy.contains(place.address);
  if (place.email) cy.contains(place.email);
  if (place.phone) cy.contains(place.phone);
  if (place.website) cy.contains(place.website);
  if (place.imageURL) cy.get(`img[src="${place.imageURL}"]`).should("have.attr", "alt");
});

Cypress.Commands.add("updatePlace", (place, newPlace) => {
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

Cypress.Commands.add("deletePlace", (place) => {
  cy.visit("/");
  cy.intercept("POST", "/api/public/places").as("searchPlace");

  cy.get("input[type=text]").click();
  cy.get("input[type=text]").type(place.description);
  cy.get("button[type=submit]").click();

  cy.wait("@searchPlace");
  cy.contains(place.name).click();

  cy.get('[data-testid="DeleteIcon"] > path').click();
  cy.contains("Deletar").click();

  cy.intercept("PUT", "/api/places").as("searchPlace");
  cy.get("input[type=text]").click();
  cy.get("input[type=text]").type(place.description + "{enter}");

  cy.wait("@searchPlace");
  cy.contains(place.name).should("not.exist");
});

export {};
