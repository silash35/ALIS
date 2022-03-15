import { users } from "../fixtures/users.json";
import { places } from "../fixtures/places.json";

describe("Profile Page", () => {
  it("should redirect when not logged", () => {
    cy.visit("/profile");
    cy.location("pathname").should("equal", "/auth/signIn");
  });

  it("should load when logged", () => {
    cy.signIn(users[2]);

    cy.visit("/profile");
    cy.location("pathname").should("equal", "/profile");

    cy.contains(users[2].name);
    cy.contains(users[2].email);
    cy.get("[data-cy=profileImage]").should("have.attr", "src", users[2].image);
  });
});

export {};
