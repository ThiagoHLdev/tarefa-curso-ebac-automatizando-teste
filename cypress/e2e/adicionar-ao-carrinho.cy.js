describe('Adicionar Ingrid Running Jacket ao carrinho', () => {
  it('Seleciona uma variação válida e adiciona ao carrinho com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')

    // Abre o produto com nome específico
    cy.contains('.product-block', 'Ingrid Running Jacket').click()

    // Seleciona tamanho e cor (válidos para esse produto)
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Orange').click()

    // Adiciona ao carrinho
    cy.get('.single_add_to_cart_button').click()
    // Verifica se o produto foi adicionado
    cy.get('.woocommerce-message', { timeout: 10000 })
      .should('contain', 'foi adicionado no seu carrinho')
  })
})
