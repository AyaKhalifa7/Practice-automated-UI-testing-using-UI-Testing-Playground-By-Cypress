describe('Click', () => {
 beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
   cy.get('a[href="/click"]').click()
  })

//Click
   it('Positive: Primary (blue) button click shows success (green) button', () => {
    cy.get('.btn-primary')
      .should('be.visible')
    .click();
    cy.get('.btn-success').should('be.visible')
  });

it('Negative: Success button should not exist if primary button is not clicked', () => {

  cy.get('.btn-success').should('not.exist')
})
})