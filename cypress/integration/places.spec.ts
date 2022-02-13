import tardis from "../fixtures/places/tardis.json";

describe("CRUD example Place (TARDIS)", () => {
  it("should create", () => {
    cy.visit("/novo");

    cy.get("input[name=userName]").click();
    cy.get("input[name=userName]").type(tardis.userName);
    cy.get("input[name=userMail]").click();
    cy.get("input[name=userMail]").type(tardis.userMail);

    cy.get("input[name=name]").click();
    cy.get("input[name=name]").type(tardis.name);
    cy.get("input[name=address]").click();
    cy.get("input[name=address]").type(tardis.address);
    cy.get("textarea[name=description]").click();
    cy.get("textarea[name=description]").type(tardis.description);
    cy.get("input[name=key]").click();
    cy.get("input[name=key]").type(tardis.key);

    cy.get("input[name=email]").click();
    cy.get("input[name=email]").type(tardis.email);
    cy.get("input[name=phone]").click();
    cy.get("input[name=phone]").type(tardis.phone);
    cy.get("input[name=website]").click();
    cy.get("input[name=website]").type(tardis.website);
    cy.get("input[name=imageURL]").click();
    cy.get("input[name=imageURL]").type(tardis.imageURL);

    //cy.get("button[type=submit]").click();

    //cy.location("pathname").should("eq", "/");
  });

  /*
  it("should read", () => {
    cy.visit("/");

    cy.get("input").click();
    cy.get("input").type(tardis.description + "{enter}");
    cy.contains(tardis.name).click();

    cy.location("pathname").should("contain.text", "locais");
    cy.contains(tardis.description);
  });
  */
});

export {};
