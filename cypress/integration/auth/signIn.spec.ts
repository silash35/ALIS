describe("Sign In Page", () => {
  it("should load", () => {
    cy.visit("/auth/signIn");
    cy.get("[data-cy=googleButton]").contains("Google");
  });
});

export {};
