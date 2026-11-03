describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Daniela Meza')
  })

  it('Test Work-Experience component', () => {
    cy.visit('/')
    cy.contains('Oracle')
    cy.contains('Softtek')
  })

  it('Test Education component', () => {
    cy.visit('/')
    cy.contains('education works!')
  })

  it('Test Languages component', () => {
    cy.visit('/')
    cy.contains('languages works!')
  })

  it('Test Skills component', () => {
    cy.visit('/')
    cy.contains('skills works!')
  })

  it('Test Certificates component', () => {
    cy.visit('/')
    cy.contains('certificates works!')
  })

  it('Test Interests component', () => {
    cy.visit('/')
    cy.contains('interests works!')
  })
})
