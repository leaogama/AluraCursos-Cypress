/// <reference types="cypress"/>
describe('Login de ususarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })


    it('Login válido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');

    })
    it('Login inválido', () => {
        cy.login('Gertrudes', '1267');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        });
    });



})