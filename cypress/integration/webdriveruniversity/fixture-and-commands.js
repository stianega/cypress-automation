/// <reference types = "cypress" />

describe("Menggunakan Fixture", () => {
    //initialization fixture
    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true})
        cy.fixture('users').then((data)=>{
            this.data = data;
            globalThis.data = data;
        })

        //menggunakan variable
        cy.fixture('users').as('userData')

    })

    it('Fixture menggunakan .this context ', function() {
        cy.get('[name="first_name"]').type(this.data.firstName)
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type(this.data.lastName)
        cy.get('[name="last_name"]').should('have.attr','name','last_name')
        cy.get('[name="email"]').type(this.data.email)
        cy.get('[name="email"]').should('have.attr','name','email')
        cy.get('textarea.feedback-input').type(this.data.comments)
        cy.get('textarea.feedback-input').should('have.attr','name','message')

        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it('Fixture menggunakan global this context ', function() {
        cy.get('[name="first_name"]').type(data.firstName)
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type(data.lastName)
        cy.get('[name="last_name"]').should('have.attr','name','last_name')
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="email"]').should('have.attr','name','email')
        cy.get('textarea.feedback-input').type(data.comments)
        cy.get('textarea.feedback-input').should('have.attr','name','message')

        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it('Fixture menggunakan variable ', () => {

        cy.get('@userData').then((data)=>{
        cy.get('[name="first_name"]').type(data.firstName)
        cy.get('[name="last_name"]').type(data.lastName)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type(data.comments)
        })

        cy.get('[name="first_name"]').should('have.attr','name','first_name')    
        cy.get('[name="last_name"]').should('have.attr','name','last_name')   
        cy.get('[name="email"]').should('have.attr','name','email')
        cy.get('textarea.feedback-input').should('have.attr','name','message')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

}
)