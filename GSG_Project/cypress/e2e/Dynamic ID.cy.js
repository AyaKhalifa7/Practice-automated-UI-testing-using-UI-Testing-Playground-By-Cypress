describe('Dynamic ID', () => {
 beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
    cy.get('a[href="/dynamicid"]').click()
  })


   it('Positive: should click the button without using dynamic id', () => {
    cy.get('button.btn-primary')   
      .should('be.visible')
      .click()

  })

  it('Negative: should fail if using dynamic id to click the button', () => {
  
    cy.get('#button3444') 
      .should('not.exist')
  })
})