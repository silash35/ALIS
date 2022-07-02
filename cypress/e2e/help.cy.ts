describe("About Page", () => {
  it("should load", () => {
    cy.visit("/help/about");
    cy.contains("O que é o ALIS");
  });
});

describe("Faq Page", () => {
  it("should load", () => {
    cy.visit("/help/faq");
    cy.contains("Perguntas frequentes");
  });
});

describe("Privacy Page", () => {
  it("should load", () => {
    cy.visit("/help/privacy");
    cy.contains("Política de Privacidade do ALIS");
  });
});

describe("Terms Page", () => {
  it("should load", () => {
    cy.visit("/help/terms");
    cy.contains("Termos de uso do ALIS");
  });
});

export {};
