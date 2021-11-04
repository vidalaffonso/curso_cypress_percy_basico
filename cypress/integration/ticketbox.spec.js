describe('Ticketbox', () => {
  beforeEach(()=>cy.visit('index.html'))

  it('Check for initial state', () => {
      cy.percySnapshot();
  });

  it('Check for invalid  email', () => {
    cy.get('#email').type('vidal.neto.com')
    cy.percySnapshot();
  });

  it('Enables submission after all mandatory fields are field', () => {
    cy.fillMandatoryFields();
    cy.percySnapshot();
    
  });

  it('Upadates agreemente base on full name, tickets quantity, and type', () => {
    cy.get('#first-name').type('Vidal')
    cy.get('#last-name').type('Affonso')
    cy.get('#ticket-quantity').select('4')
    cy.get('#vip').check()
    cy.percySnapshot();
  });

  it('Shows a sucess message agetr form submission', () => {
    cy.fillMandatoryFields();
    cy.contains('Confirm Tickets').click()
    cy.percySnapshot();
  });
});