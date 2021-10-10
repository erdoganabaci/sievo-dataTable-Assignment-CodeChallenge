/// <reference types="cypress" />

describe("test input", () => {
  before(() => {
    cy.visit("/");
  });

  it("displays two todo items by default", () => {
    // checking input works well
    cy.get("[data-testid=user-input]").type("Decrease");
  });
});
