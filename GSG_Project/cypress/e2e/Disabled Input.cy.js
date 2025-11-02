describe('Disabled Input', () => {
 beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
    cy.get('a[href="/disabledinput"]').click()
  })

//Disabled Input

  it('Positive: input is disabled after button click and re-enabled after 5 seconds', () => {

  cy.get('#inputField')
    .type('Aya Khalifa')
    .should('have.value', 'Aya Khalifa');
  cy.get('#enableButton') 
    .click();

  cy.get('#inputField')
    .should('be.disabled');

  cy.get('#inputField', { timeout: 5000 })
    .should('not.be.disabled');
});

it('Negative: input remains disabled immediately after clicking button', () => { 

  cy.get('#inputField')
    .type('Aya Khalifa')
    .should('have.value', 'Aya Khalifa');

  cy.get('#enableButton')
    .click();

  cy.get('#inputField', { timeout: 500 }) 
    .should('be.disabled'); 
});
})