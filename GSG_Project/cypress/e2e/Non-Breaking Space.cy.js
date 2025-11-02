describe('Non-Breaking Space', () => {
   beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
   cy.get('a[href="/nbsp"]').click()
   })


//Non-Breaking Space

 it('Negattive: should fail to find button with normal space', () => {


 cy.xpath("//button[text()='My Button']")
      .should('not.exist')   
               
    
  })

   it('Positive: should click the button successfull', () => {

 cy.xpath("//button[text()='My\u00A0Button']")
      .should('be.visible')   
      .click();            
    
  })

})