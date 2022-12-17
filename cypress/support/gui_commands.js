/// <reference types="cypress"/>


Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome)
    cy.get('input[formcontrolname="password"]').type(senha, {log: false})
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('novoUsuario', (email, fullName, userName, password) => {
    cy.contains('p > a', 'Register now').click()
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="fullName"]').type(fullName)
    cy.get('input[formcontrolname="userName"]').type(userName)
    cy.get('input[formcontrolname="password"]').type(password)
    cy.get('small').should('contain.text', 'User available'); 
    cy.contains('button', 'Register').should('be.visible').click({force:true});
    cy.contains('ap-vmessage > small', 'User name is required!').should('be.visible')
    
})
Cypress.Commands.add('novoUsuarioLogado', (email, fullName, userName, password) => {
    cy.contains('p > a', 'Register now').click()
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="fullName"]').type(fullName)
    cy.get('input[formcontrolname="userName"]').type(userName)
    cy.get('input[formcontrolname="password"]').type(password)
    cy.get('small').should('contain.text', 'User available'); 
    cy.contains('button', 'Register').should('be.visible').click({force:true});
    cy.contains('ap-vmessage > small', 'User name is required!').should('be.visible')
    cy.get('input[formcontrolname="userName"]').should('be.visible').type(userName)
    cy.get('input[formcontrolname="password"]').should('be.visible').type(password)
    cy.get('button[type="submit"]').click()
})

