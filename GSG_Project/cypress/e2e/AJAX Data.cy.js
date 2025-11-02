describe('AJAX Data', () => {
  
     beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
    cy.get('a[href="/ajax"]').click()
    cy.get('#ajaxButton').click()
  })

//AJAX Data
   it('Positive:Should display \'Data loaded with AJAX get request.\' after AJAX button click', () => {  

    cy.get('p.bg-success', { timeout: 15500 })
 .should('be.visible')
  .and('contain.text', 'Data loaded with AJAX get request.')

});
it('Negative: paragraph should not contain text immediately after button click', () => {
  
  cy.get('p.bg-success', { timeout: 1000 })
    .should('not.exist')
})
});