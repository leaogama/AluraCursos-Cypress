/// <reference types="cypress"/>

describe('Login em Alura Pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    });

    it('Login válido', () => {
        cy.log
        cy.contains('a', '(Logout)').should('be.visible')

    })
    it('Login inválido', () => {
        cy.get('input[formcontrolname="userName"]').type('flavioax')
        cy.get('input[formcontrolname="password"]').type('12343')
        cy.get('button[type="submit"]').click()
       // cy.contains('a', '(Logout)').should('not.be.visible')

    })

});