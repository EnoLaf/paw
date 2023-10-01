describe('add animal', () => {
  it('success', () => {
    cy.visit('http://localhost:8080/carnet-de-sante');
    cy.get('button').click();
    cy.get('#select').select("Chien");
    cy.get('[placeholder="Race"] > input').type('Border Collie');
    cy.get('[placeholder="Nom"] > input').type('Nuts');
    cy.get('.dob > input').type("2017-03-04");
    cy.get('#male').click();
    cy.get('[style="--borderColor: #FF9505; --color: #FF9505; --bgColor: #FEF9F0; --width: 250px; --height: 45px; --fontSize: 26px;"]').click();
    cy.get('#colorInput > input').type("Blanc et noir");
    cy.get('[placeholder="N° Puce"] > input').type("1212121212121212");
    cy.get('[placeholder="Poids"] > input').type("45");
    cy.get('textarea').type("RAS");
    cy.get('#check').click();
    cy.get('[style="--borderColor: #FF9505; --color: #FEF9F0; --bgColor: #FF9505; --width: 250px; --height: 45px; --fontSize: 26px;"]').click();
  })
})