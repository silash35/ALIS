import { users } from "../../fixtures/users.json";

describe("Sign In Page", () => {
  it("should load when not logged", () => {
    cy.visit("/auth/signIn");
    cy.get("[data-cy=googleButton]").contains("Google");
    cy.location("pathname").should("equal", "/auth/signIn");
  });

  it("should redirect when logged", () => {
    cy.signIn(users[2]);

    cy.visit("/auth/signIn");
    cy.get("[data-cy=googleButton]").should("not.exist");
    cy.location("pathname").should("equal", "/");
    cy.get("button").contains("Entendi").click();
  });
});

export {};
