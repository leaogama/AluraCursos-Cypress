/// <reference types="cypress"/>
describe('Login de registro de usuario alura pic', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com');
  })

  it('verifica mensagem de validação', () => {
    cy.contains('a', 'Register now').click()
    //cy.get('a[href="#/home/signup"]').click() body > app-root > ng-component > div > div > div:nth-child(2) > ng-component > form > div:nth-child(1) > ap-vmessage > small.text-danger
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
  });
  it('verifica mensagem de email inválido', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="email"]').type('teste')
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
  });
  it('verifica mensagem senha com menos de 8 caracteres', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="password"]').type('1234567')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
  });

  it('01- Verifica mensagem user name com 6 maiúsculas', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('FLAVIO{enter}')
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
  });
  
  it('02- Verifica mensagem user name com 1 minúsculo', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('a{enter}')
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
  });
  it('03- Verifica mensagem user name com 1 maiúsculo', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('A{enter}')
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
  });
  it('04- Verifica mensagem user name com 31 números', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('1234567890123456789012345678901{enter}')
    cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible')
  });
  it('05- Verifica mensagem user name com 31 maiúsculos', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA{enter}')
    cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible')
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
  });
  it('06- Verifica mensagem user name correto mas já cadastrado', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('flavio{enter}')
    cy.contains('ap-vmessage', 'Username already taken').should('be.visible')
  });
  it('07- Verifica mensagem user name correto e disponível', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('flavio123{enter}')
    cy.contains('small.text-success', 'User available').should('be.visible')
  });
  it('08- Verifica tela ERRO com user name recebendo dois espaços em branco', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('  {enter}')
    cy.get('h2').should('contain.text', 'Ops! An error has ocurred!')
    cy.get('p').should('contain.text', ' Don´t worry, our team is aware of the problem! ')
    cy.get('p > a').should('contain.text', 'Return to the aplication.')
    cy.get('.navbar-text > a').should('contain.text', 'Please, login!')
  });

});