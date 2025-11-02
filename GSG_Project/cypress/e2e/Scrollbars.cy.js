describe('Scrollbars', () => {
 beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
  cy.get('a[href="/scrollbars"]').click()
  })

//Scrollbars
 

   it('Positive: should scroll to the hidden button and click it', () => {
  cy.get('#hidingButton')  
    .scrollIntoView()
    .should('be.visible')
    .click()
})


it('Negative: button should not be visible before scrolling', () => {
 
  cy.get('#hidingButton')
    .should('not.be.visible') 
})
})