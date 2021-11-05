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

  it('Updates agreemente base on full name, tickets quantity, and type', () => {
    cy.get('#first-name').type('Vidal')
    cy.get('#last-name').type('Affonso')
    cy.get('#ticket-quantity').select('4')
    cy.get('#vip').check()
    cy.percySnapshot();
  });


  const successfulFormSubmission = 'Shows a success message after form submission'
  it('successfulFormSubmission', () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.percySnapshot(successfulFormSubmission, {
      percyCSS: `.success span { display: none; }`
    });
  });
});