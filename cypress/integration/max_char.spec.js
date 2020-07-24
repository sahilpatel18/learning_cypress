describe("Text box with max char", () => {
  it("shows appropriate remaining char count", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get('[data-cy="chars-left-count"]').as('charsLeftSpan')

    cy.get('@charsLeftSpan').invoke("text").should("equal", "15");

    cy.get('[data-cy="max-char-input"]').type("hello");

    cy.get('@charsLeftSpan').invoke("text").should("equal", "10");

    cy.get('[data-cy="max-char-input"]').type(" my friend");

    cy.get('@charsLeftSpan').invoke("text").should("equal", "0");
  });

  it("prevents the user from typing more characters once max is exceeded", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get('[data-cy="max-char-input"]').type("123ff1ff4512345kfjakfd");

    cy.get('[data-cy="max-char-input"]').should("have.attr", "value", "123ff1ff4512345");
  });
});
