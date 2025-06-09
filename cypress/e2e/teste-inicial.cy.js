describe('Teste inicial', () => {
  it('Visita a página inicial', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
  })
})
