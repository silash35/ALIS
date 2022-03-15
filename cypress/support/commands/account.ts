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
  cy.session([user.name, user.password], () => {
    cy.visit("/");
    cy.get("button").contains("Fazer Login").click();

    cy.get("input[name=username]").clear();
    cy.get("input[name=username]").type(user.name);
    cy.get("input[name=password]").clear();
    cy.get("input[name=password]").type(user.password + "{enter}");
    cy.location("pathname").should("equal", "/");

    cy.get("header").contains("Criar Conta").should("not.exist");
    cy.get("header").contains("Fazer Login").should("not.exist");
    cy.get("[data-cy=avatar]");
  });
});

Cypress.Commands.add("signOut", () => {
  cy.visit("/");
  cy.get("[data-cy=avatar]").click();

  cy.intercept("POST", "/api/auth/signout").as("signOut");
  cy.intercept("/api/auth/session").as("session");
  cy.get("[data-cy=signOut]").click();
  cy.wait("@signOut");
  cy.wait("@session");

  cy.get("header").contains("Criar Conta");
  cy.get("header").contains("Fazer Login");
  cy.get("[data-cy=avatar]").should("not.exist");
});

export {};
