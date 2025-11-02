describe('Sample App', () => {
 beforeEach(() => {
   cy.visit('https://uitestingplayground.com/?authuser=0')
  cy.get('a[href="/sampleapp"]').click()
  })

//Sample App
 
  it('Positive: should log in successfully with valid username and correct password', () => {
    const username = 'Aya Khalifa'
    const password = 'pwd'  

    cy.get('input[name="UserName"]')  
      .type(username)

cy.get('input[name="Password"]') 
        .type(password)

    cy.get('#login')           
      .click()

    cy.get('#loginstatus')
      .should('contain.text', `Welcome, ${username}`)
  })

   it('Negative: login fails with incorrect credentials', () => {
    const username = 'Aya Khalifa'
    const password = '123'  

    cy.get('input[name="UserName"]')  
      .type(username)

cy.get('input[name="Password"]') 
        .type(password)

    cy.get('#login')           
      .click()

    cy.get('#loginstatus')
      .should('contain.text','Invalid username/password')
  })
})