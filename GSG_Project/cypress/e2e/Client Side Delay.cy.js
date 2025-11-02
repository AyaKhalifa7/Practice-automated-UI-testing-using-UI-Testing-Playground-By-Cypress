describe('Client Side Delay', () => {
  
     beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
cy.get('a[href="/clientdelay"]').click()
cy.get('#ajaxButton').click()
  })

//Client Side Delay
   it('Positive:Should display \'Data calculated on the client side.\' after AJAX button click', () => {  
    cy.get('p.bg-success', { timeout: 15500 })
 .should('be.visible')
 .and('contain.text','Data calculated on the client side.')
  

});
it('Negative: paragraph should not contain text immediately after button click', () => {
   cy.get('p.bg-success', { timeout: 1000 })
    .should('not.exist')
})
});