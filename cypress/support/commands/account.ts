import doctor from "../../fixtures/users/doctor.json";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to sign in to Alis by UI using passed user
       * @example cy.signIn(user)
       */
      signInByUI(user: typeof doctor): void;

      /**
       * Custom command to sign out to Alis by UI
       * @example cy.signIn(user)
       */
      signOutByUI(): void;

      /**
       * Custom command to sign in to Alis by API using passed user
       * @example cy.signIn(user)
       */
      signInByAPI(user: typeof doctor): void;

      /**
       * Custom command to sign out to Alis by API
       * @example cy.signIn(user)
       */
      signOutByAPI(): void;
    }
  }
}

// Using UI
Cypress.Commands.add("signInByUI", (user) => {
  cy.visit("/auth/signin");

  cy.get("input[name=username]").clear();
  cy.get("input[name=username]").type(user.name);
  cy.get("input[name=password]").clear();
  cy.get("input[name=password]").type(user.password);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("signOutByUI", () => {
  cy.visit("/");
  cy.get("[data-cy=avatar]").click();
  cy.get("[data-cy=signOut]").click();
});

// Using API
Cypress.Commands.add("signInByAPI", (user) => {
  cy.visit("/auth/signin");

  cy.get("input[name=username]").clear();
  cy.get("input[name=username]").type(user.name);
  cy.get("input[name=password]").clear();
  cy.get("input[name=password]").type(user.password);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("signOutByAPI", () => {
  cy.visit("/");
  cy.get("[data-cy=avatar]").click();
  cy.get("[data-cy=signOut]").click();
});

export {};
