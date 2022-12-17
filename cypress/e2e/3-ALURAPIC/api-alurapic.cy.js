/// <reference types="cypress"/>
describe('Buscar fotos e dados', () => {

    it.only('buscar fotos do flavio', () => {
        console.clear()
        console.log(Cypress.env())
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            console.clear()
            console.log(res)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
            
        })
    })

    it('buscar fotos do flavio', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            console.clear()
            console.log(res)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal("Farol iluminado")
        })
    })
})