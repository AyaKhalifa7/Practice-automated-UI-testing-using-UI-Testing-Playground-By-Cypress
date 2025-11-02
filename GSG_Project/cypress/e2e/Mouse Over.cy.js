describe('Mouse Over', () => {
   beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
  cy.get('a[href="/mouseover"]').click()
   })


//Mouse Over
 it('Positive: hover and click updates click count and shows result', () => {
 
       cy.contains('a', 'Click me')
    .trigger('mouseover')  
    .click()               

  cy.contains('a', 'Click me')
    .trigger('mouseover')
    .click()               
 
  cy.get('#clickCount')
    .should('have.text', '2')
 
  cy.contains('a', 'Link Button')
    .trigger('dblclick')
 
  cy.contains('The link above clicked 2 times').should('exist')
  })

  


it('Negative: clicking unrelated element does not update click count', () => {

  cy.contains('a', 'Link Button')   
    .click()

  cy.get('#clickCount')
    .should('have.text', '0')

  cy.contains('The link above clicked 2 times').should('not.exist')
})

})