/// <reference types ="Cypress"/>

describe("Checking the counter application", () => {
  it("should be able to visit application url", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should have all the components", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("exist");
    cy.get(".increment_count").should("exist");
    cy.get(".decrement_count").should("exist");
  });

  it("should be able to incement counter", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("have.text", "Counter is 0");
    cy.get(".increment_count").click();
    cy.get("h1").should("have.text", "Counter is 1");
  });

  it("should increment count,with multiple clicks", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("have.text", "Counter is 0");
    cy.get(".increment_count").click();
    cy.get(".increment_count").click();
    cy.get(".increment_count").click();
    cy.get(".increment_count").click();
    cy.get("h1").should("have.text", "Counter is 4");
  })
});
