describe('Text Input', () => {
 beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
  cy.get('a[href="/textinput"]').click()
  })

//Text Input
  it('Positive: should update button label after entering text', () => {
    const inputText = 'Hi'
    cy.get('#newButtonName')          
      .type(inputText)
    cy.get('#updatingButton')           
      .should('be.visible')
      .click()
    cy.get('#updatingButton')
      .should('contain.text', inputText)
  })


   it('Negative: button label should not change if input is empty', () => {
    cy.get('#updatingButton')
      .then(($btn) => {
        const originalText = $btn.text()
        cy.get('#newButtonName').clear()   
        cy.get('#updatingButton').click()
        cy.get('#updatingButton').should('have.text', originalText)
      })
  })
})