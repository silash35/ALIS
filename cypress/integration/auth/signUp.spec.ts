describe("Sign Up Page", () => {
  it("should load", () => {
    cy.visit("/auth/signUp");
    cy.get("[data-cy=googleButton]").contains("Google");
  });
});

export {};
