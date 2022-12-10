/// <reference types="cypress"/>
//import { faker } from '@faker-js/faker';
const usersFixture = require('../../fixtures/usersFixture.json');
//faker.locale = 'pt_BR';

//let users = []
describe('Login em Alura Pic', () => {

// for (let u = 0; u < 10; u++) {

//     const randomFullName2 = faker.helpers.fake('{{name.firstName}} {{name.lastName}}')
//     const randomEmail2 = faker.internet.email(randomFullName2);
//     const randomPassword2 = faker.internet.password(8, true)
//     const randomUserName2 = randomFullName2.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replaceAll(' ', '')

//     let userTemp = {
//         randomFullName2,
//         randomEmail2,
//         randomPassword2,
//         randomUserName2,
//     }
//     users.push(userTemp);

//     //const element = array[u];

// }
// console.clear
// console.log(users)




    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });


    forEach(usersFixture => {
             it(' : Novo usuário logado', () => {
            const randomFullName = usersFixture.randomFullName2
            const randomEmail = usersFixture.randomEmail2
            const randomPassword = usersFixture.randomPassword2
            const randomUserName = usersFixture.randomUserName2
            cy.novoUsuarioLogado(randomEmail, randomFullName, randomUserName, randomPassword)
            cy.get('a.mr-1').should('contain.text', randomUserName)
        });
    });
   
    
});

