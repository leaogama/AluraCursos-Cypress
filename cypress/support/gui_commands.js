/// <reference types="cypress"/>


Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome)
    cy.get('input[formcontrolname="password"]').type(senha)
    cy.get('button[type="submit"]').click()
})

describe('Login em Alura Pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    });

    it('Login válido', () => {

        cy.contains('a', '(Logout)').should('be.visible')

    })
    it('Login inválido', () => {
        cy.get('input[formcontrolname="userName"]').type('flavioax')
        cy.get('input[formcontrolname="password"]').type('12343')
        cy.get('button[type="submit"]').click()
        // cy.contains('a', '(Logout)').should('not.be.visible')

    })

});