import { users } from "../../fixtures/users.json";
import { places } from "../../fixtures/places.json";
import { Place } from "../../support/types";

describe("Edit Place Page", () => {
  beforeEach(() => {
    cy.signIn(users[2]);
    cy.createPlace(places[0]);
    cy.signOut();
    cy.getPlaceId(places[0]);
  });

  it("should load 404 only when place is not valid", () => {
    cy.visit(`/places/edit/623630453a89ceb2275e1274`, { failOnStatusCode: false });
    cy.contains("h1", "404");
    cy.visit(`/places/edit/623630453a89ceb2275e1275`, { failOnStatusCode: false });
    cy.contains("h1", "404");
    cy.visit(`/places/edit/623630453a89ceb2275e12755notExist`, { failOnStatusCode: false });
    cy.contains("h1", "404");
    cy.visit(`/places/edit/notExist`, { failOnStatusCode: false });
    cy.contains("h1", "404");
    cy.visit(`/places/edit/`, { failOnStatusCode: false });
    cy.contains("h1", "404");

    cy.signIn(users[2]);
    cy.deletePlace(places[0]);
  });

  it("should redirect when user is no the creator of the place", () => {
    cy.get("@placeId").then((placeID) => {
      cy.visit(`/places/${placeID}/edit`);
      cy.location("pathname").should("equal", "/auth/signIn");

      cy.signIn(users[3]);
      cy.visit(`/places/${placeID}/edit`);
      cy.location("pathname").should("equal", `/places/${placeID}`);
    });

    cy.signIn(users[2]);
    cy.deletePlace(places[0]);
  });

  it("should edit place", () => {
    cy.get("@placeId").then((placeID) => {
      cy.signIn(users[2]);
      cy.visit(`/places/${placeID}/edit`);

      readPlaceByUi(places[0]);

      cy.get("input[name=name]").click();
      cy.get("input[name=name]").clear();
      cy.get("input[name=name]").type(places[1].name);
      cy.get("input[name=address]").click();
      cy.get("input[name=address]").clear();
      cy.get("input[name=address]").type(places[1].address);
      cy.get("textarea[name=description]").click();
      cy.get("textarea[name=description]").clear();
      cy.get("textarea[name=description]").type(places[1].description);

      cy.get("input[name=email]").click();
      cy.get("input[name=email]").clear();
      cy.get("input[name=phone]").click();
      cy.get("input[name=phone]").clear();
      cy.get("input[name=website]").click();
      cy.get("input[name=website]").clear();
      cy.get("input[name=imageURL]").click();
      cy.get("input[name=imageURL]").clear();

      cy.get("button[type=submit]").click();
      cy.get("button").contains("Salvar Alterações").click();
      cy.location("pathname").should("equal", `/places/${placeID}`);

      cy.visit(`/places/${placeID}/edit`);
      readPlaceByUi(places[1]);
      cy.deletePlace(places[1]);
    });
  });
});

export {};

const readPlaceByUi = (place: Place) => {
  cy.get("input[name=name]").should("have.value", place.name);
  cy.get("input[name=address]").should("have.value", place.address);
  cy.get("textarea[name=description]").should("have.value", place.description);

  cy.get("input[name=email]").should("have.value", place.email ? place.email : "");
  cy.get("input[name=phone]").should("have.value", place.phone ? place.phone : "");
  cy.get("input[name=website]").should("have.value", place.website ? place.website : "");
  cy.get("input[name=imageURL]").should("have.value", place.imageURL ? place.imageURL : "");
};
