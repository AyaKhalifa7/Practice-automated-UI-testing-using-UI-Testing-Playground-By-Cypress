describe('Class Attribute', () => {
  
     beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
   cy.get('a[href="/classattr"]').click()
  })

//Class Attribute
   it('Positive: Click the blue primary button with correct selector and handle alert', () => {
    
    cy.get('.btn-primary')
      .should('be.visible')

    cy.get('.btn-primary').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Primary button pressed');    
    });


  });
 it('Negative: Puth the xpath without full path ', () => {
 cy.xpath('/section/div/button[2]').should('not.exist');
  });
});