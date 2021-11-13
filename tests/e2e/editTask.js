it("allows editing of task", () => {
  cy.visit("/");

  const dueDate = "2017-04-30T13:00";
  const newDate = "2017-06-20T11:00";

  cy.get("form[name=task-create]").within(() => {
    cy.get("[name=title]").type("buy milk");
    cy.get("[name=dueDate]").type(dueDate);
    cy.get("button[type=submit]").click();
  });

  cy.get("#tasks-container").within(() => {
    cy.get("[data-var=title]").contains("buy milk");
    cy.get("[data-var=date]").contains(new Date(dueDate).toLocaleString());
    cy.get("[name=delete]").should("be.visible");
    cy.get("[name=edit]").should("be.visible");
  });

  cy.get("#tasks-container").within(() => {
    cy.get("button[name=edit]").click();
  });

  cy.get("form[name=task-edit]").within(() => {
    cy.get("[name=title]").clear().type("buy bread");
    cy.get("[name=dueDate]").clear().type(newDate);
    cy.get("button[type=submit]").click();
  });

  cy.get("#tasks-container").within(() => {
    cy.get("[data-var=title]").contains("buy bread");
    cy.get("[data-var=date]").contains(new Date(newDate).toLocaleString());
    cy.get("[name=delete]").should("be.visible");
    cy.get("[name=edit]").should("be.visible");
  });
});
