/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR';
describe('Login em Alura Pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    });

    it('Login válido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible')

    })
    it('Login inválido', () => {
        cy.login('Gertrudes', '1267')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
    it('Novo usuário logado', () => {
      

        const randomFullName = faker.helpers.fake('{{name.firstName}} {{name.lastName}}')
        const randomEmail = faker.internet.email(randomFullName, { allowSpecialCharacters: false }); 
        const randomPassword = faker.internet.password(8, true) 
        const randomUserName =  randomFullName.toLowerCase().trim().replace(' ','')
           cy.novoUsuarioLogado(randomEmail, randomFullName, randomUserName, randomPassword)
        cy.get('a.mr-1').should('contain.text', randomUserName)
    });
});