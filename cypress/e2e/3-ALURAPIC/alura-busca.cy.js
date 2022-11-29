/// <reference types="cypress"/>
describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br/busca?query=')
    })
    it('buscar curso de java', () => {
        cy.get('#busca-form-input').should('be.visible').type('Python{enter}', { force: true });
        cy.get('li h4.busca-resultado-nome').should('contain', 'Formação Python  e orientação a objetos')
    })
})