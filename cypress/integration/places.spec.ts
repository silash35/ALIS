import tardis from "../fixtures/places/tardis.json";
import unitHq from "../fixtures/places/unitHq.json";

describe("CRUD example Place (TARDIS)", () => {
  it("should create", () => {
    cy.createPlaceByUI(tardis);
  });

  it("should read", () => {
    cy.readPlaceByUI(tardis);
  });

  it("should update", () => {
    cy.updatePlaceByUI(tardis, unitHq);
  });

  it("should delete", () => {
    cy.deletePlaceByUI(tardis);
  });
});

export {};
