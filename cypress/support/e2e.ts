import "./commands/account";
import "./commands/place";

after(() => {
  cy.deleteAllTestPlaces();
});
