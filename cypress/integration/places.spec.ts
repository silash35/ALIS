import tardis from "../fixtures/places/tardis.json";
import unitHq from "../fixtures/places/unitHq.json";

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

    cy.get("button[type=submit]").click();
    cy.location("pathname").should("eq", "/");
  });

  it("should read", () => {
    cy.visit("/");
    cy.intercept("PUT", "/api/places").as("searchPlace");

    cy.get("input[type=text]").click();
    cy.get("input[type=text]").type(tardis.description + "{enter}");

    cy.wait("@searchPlace");
    cy.contains(tardis.name).click();

    cy.location("pathname").should("contain", "locais");

    cy.contains(tardis.name);
    cy.contains(tardis.description);
    cy.contains(tardis.address);
    cy.contains(tardis.email);
    cy.contains(tardis.phone);
    cy.contains(tardis.website);
    cy.get(`img[src="${tardis.imageURL}"]`).should("have.attr", "alt");
  });

  it("should update", () => {
    cy.visit("/");
    cy.intercept("PUT", "/api/places").as("searchPlace");

    cy.get("input[type=text]").click();
    cy.get("input[type=text]").type(tardis.description);
    cy.get("button[type=submit]").click();

    cy.wait("@searchPlace");
    cy.contains(tardis.name).click();

    cy.location("pathname").should("contain", "locais");

    cy.get('[data-testid="EditIcon"] > path').click();
    cy.location("pathname").should("contain", "edit");

    cy.get("input[name=name]").should("have.value", tardis.name);
    cy.get("input[name=address]").should("have.value", tardis.address);
    cy.get("textarea[name=description]").should("have.value", tardis.description);
    cy.get("input[name=email]").should("have.value", tardis.email);
    cy.get("input[name=phone]").should("have.value", tardis.phone);
    cy.get("input[name=website]").should("have.value", tardis.website);
    cy.get("input[name=imageURL]").should("have.value", tardis.imageURL);

    cy.get("input[name=name]").click();
    cy.get("input[name=name]").clear();
    cy.get("input[name=name]").type(unitHq.name);
    cy.get("input[name=address]").click();
    cy.get("input[name=address]").clear();
    cy.get("input[name=address]").type(unitHq.address);
    cy.get("textarea[name=description]").click();
    cy.get("textarea[name=description]").clear();
    cy.get("textarea[name=description]").type(unitHq.description);

    cy.get("input[name=email]").click();
    cy.get("input[name=email]").clear();
    cy.get("input[name=phone]").click();
    cy.get("input[name=phone]").clear();
    cy.get("input[name=website]").click();
    cy.get("input[name=website]").clear();
    cy.get("input[name=imageURL]").click();
    cy.get("input[name=imageURL]").clear();

    cy.get("button[type=submit]").click();
    cy.get("input[type=password]").clear();
    cy.get("input[type=password]").type(tardis.key);

    cy.contains("Salvar Alterações").click();

    cy.contains(unitHq.name);
    cy.contains(unitHq.description);
    cy.contains(unitHq.address);

    cy.contains("Telefone:").should("not.exist");
    cy.contains("Email:").should("not.exist");
    cy.contains("Site:").should("not.exist");
    cy.get("img").should("not.exist");
  });

  it("should delete", () => {
    cy.visit("/");
    cy.intercept("PUT", "/api/places").as("searchPlace");

    cy.get("input[type=text]").click();
    cy.get("input[type=text]").type(unitHq.description);
    cy.get("button[type=submit]").click();

    cy.wait("@searchPlace");
    cy.contains(unitHq.name).click();

    cy.location("pathname").should("contain", "locais");

    cy.get('[data-testid="DeleteIcon"] > path').click();
    cy.get("input[type=password]").clear();
    cy.get("input[type=password]").type(tardis.key);
    cy.contains("Deletar").click();

    cy.intercept("PUT", "/api/places").as("searchPlace");
    cy.get("input[type=text]").click();
    cy.get("input[type=text]").type(unitHq.description + "{enter}");

    cy.wait("@searchPlace");
    cy.contains(unitHq.name).should("not.exist");
  });
});

export {};
