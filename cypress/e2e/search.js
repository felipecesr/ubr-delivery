describe('search a commerce', () => {
  it('can search for a commerce category', () => {
    cy.visit('/')
    cy.findByRole('link', { name: /pesquisar/i }).click()
    cy.findByPlaceholderText(/pesquise um comércio ou categoria/i).type('top lanches')
    cy.get('article > h2').should('have.text', 'Top Lanches')
  })
})
