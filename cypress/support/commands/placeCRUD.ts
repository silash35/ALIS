import tardis from "../../fixtures/places/tardis.json";

// Using UI

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to create a place by UI using passed place
       * @example cy.createPlaceByUI(place)
       */
      createPlaceByUI(place: typeof tardis): void;
    }
  }
}

Cypress.Commands.add("createPlaceByUI", (place) => {
  cy.visit("/places/new");

  cy.get("input[name=userName]").click();
  cy.get("input[name=userName]").type(place.userName);
  cy.get("input[name=userMail]").click();
  cy.get("input[name=userMail]").type(place.userMail);

  cy.get("input[name=name]").click();
  cy.get("input[name=name]").type(place.name);
  cy.get("input[name=address]").click();
  cy.get("input[name=address]").type(place.address);
  cy.get("textarea[name=description]").click();
  cy.get("textarea[name=description]").type(place.description);
  cy.get("input[name=key]").click();
  cy.get("input[name=key]").type(place.key);

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

// Using API

export {};
