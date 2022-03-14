import { User } from "../types";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to sign in to Alis using passed user
       * @example cy.signIn(user)
       */
      signIn(user: User): void;

      /**
       * Custom command to sign out to Alis
       * @example cy.signIn(user)
       */
      signOut(): void;
    }
  }
}

Cypress.Commands.add("signIn", (user) => {
  cy.visit("/");
  cy.visit("/auth/signIn");

  cy.get("input[name=username]").clear();
  cy.get("input[name=username]").type(user.name);
  cy.get("input[name=password]").clear();
  cy.get("input[name=password]").type(user.password + "{enter}");

  cy.location("pathname").should("equal", "/");
});

Cypress.Commands.add("signOut", () => {
  cy.visit("/");
  cy.get("[data-cy=avatar]").click();
  cy.get("[data-cy=signOut]").click();
});

export {};
