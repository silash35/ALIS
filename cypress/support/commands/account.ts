import doctor from "../../fixtures/users/doctor.json";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to sign in to Alis by UI using passed user
       * @example cy.signIn(user)
       */
      signIn(user: typeof doctor): void;

      /**
       * Custom command to sign out to Alis by UI
       * @example cy.signIn(user)
       */
      signOut(): void;
    }
  }
}

Cypress.Commands.add("signIn", (user) => {
  cy.visit("/auth/signin");

  cy.get("input[name=username]").clear();
  cy.get("input[name=username]").type(user.name);
  cy.get("input[name=password]").clear();
  cy.get("input[name=password]").type(user.password);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("signOut", () => {
  cy.visit("/");
  cy.get("[data-cy=avatar]").click();
  cy.get("[data-cy=signOut]").click();
});

export {};
