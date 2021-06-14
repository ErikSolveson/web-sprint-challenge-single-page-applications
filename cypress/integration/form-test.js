describe("pizza order form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get('input[name="name"]');

  it("sanity checks", () => {
    expect(5).toBe.equal(5);
  });
});
