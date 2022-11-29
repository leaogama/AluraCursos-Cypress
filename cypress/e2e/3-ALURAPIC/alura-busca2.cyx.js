/// <reference types="cypress"/>

//let x
describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('http://www.alura.com.br')
        // cy.wait(5500)
    })
    it('buscar curso de java', () => {

        //cy.get('input[type="search"]').type('Java');
        cy.get('input[type="search"]').type('Java{enter}', { force: true });
        //cy.get('input[type="search"]').type('sql {enter}', { force: true })
        //cy.contains('#header-barraBusca-form-campoBusca','O que você quer aprender?').click()
        // cy.wait(4000)
        //cy.get('.header-barraBusca-form-submit').click({ force: true })#busca-resultados > ul > li:nth-child(1) > a > div > h4
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos')
        cy.get('#busca-resultados > ul > li h4.busca-resultado-nome').its('length').should('be.gt', 2).should('contain', 'Java')
        //cy.get('#busca-resultados > ul > li').its('length').should('be.gt', 2)
        // cy.get('#busca-resultados > ul > li[1]').should((response) => {
        //     console.log('cls')
        //     // x = response
        //     console.log(response)
        // })

        // :nth-child(1)
    })
})