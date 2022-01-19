/// <reference types = "cypress" />

describe("visit menggunakan base url & isi menggunakan global variabel", () => {
    it('submit contact-us',()=>{
        cy.visit('/')
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true})
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','/contactus.html')

        cy.get('[name="first_name"]').type(Cypress.env('firstName'))
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type(Cypress.env('lastName'))
        cy.get('[name="last_name"]').should('have.attr','name','last_name')
        cy.get('[name="email"]').type(Cypress.env('email'))
        cy.get('[name="email"]').should('have.attr','name','email')
        cy.get('textarea.feedback-input').type(Cypress.env('comment'))
        cy.get('textarea.feedback-input').should('have.attr','name','message')

        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
       
    })
    
    

    }
)