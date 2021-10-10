/// <reference types="cypress" />

describe("test input", () => {
  before(() => {
    cy.visit("/");
  });

  it("checks input typing works", () => {
    // checking input works well
    cy.get("[data-testid=user-input]").type("Decrease");
  });
});
