describe('Auto Wait', () => {
  
     beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
          cy.get('a[href="/autowait"]').click() 

  })

//Auto Wait
   it('Positive: Target is clickable immediately after Apply with all properties enabled', () => {
  
cy.get('#element-type').select('Button') 
    cy.get('#visible').check()
     cy.get('#enabled').check()
      cy.get('#editable').check()
       cy.get('#ontop').check()
        cy.get('#nonzero').check()

   cy.get('#applyButton3').click()

  cy.get('#target', { timeout: 100 })
    .should('be.visible')
    .and('be.enabled')

  cy.get('#target').click()

  cy.get('#opstatus').should('contain.text', 'Target clicked.')
  })


   it('Negative: Target is not visible immediately after Apply if visibility is unchecked ', () => {
  
    cy.get('#element-type').select('Button') 
    cy.get('#visible').uncheck()
   cy.get('#applyButton5',{timeout: 1000}).click()
    cy.get('#target').should('not.visible')

  })
});