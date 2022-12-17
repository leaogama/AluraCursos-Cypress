/// <reference types="cypress"/>
describe('Login de ususarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
       cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {statusCode: 200}).as('stubPost')
    })


    it.only('Login válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
       cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');

    })
    it('Login inválido', () => {
        cy.login('Gertrudes', '1267');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        });
    });



})