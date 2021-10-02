it("has a title", () => {
  cy.visit("/");
  cy.title().should("eq", "Habit");
});
