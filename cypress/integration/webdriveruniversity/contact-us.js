/// <reference types = "cypress" />

describe("Test Contacts Us from website", () => {
    it('Text yang disimpan harus berhasil',()=>{
        cy.visit('/')
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true})
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','/contactus.html')

        /** Mengambil elemen contactus dan click newtab ke halaman form contact us,
         * karena cypress tidak bisa new tab maka visit link langsung mengarah ke form input link
         */
        //cy.get('#contact-us').click({force :true})

        cy.get('[name="first_name"]').type('Ega')
        cy.get('[name="first_name"]').should('have.attr','name','first_name')
        cy.get('[name="last_name"]').type('Septian')
        cy.get('[name="last_name"]').should('have.attr','name','last_name')
        cy.get('[name="email"]').type('nenekseven@gmail.com')
        cy.get('[name="email"]').should('have.attr','name','email')
        cy.get('textarea.feedback-input').type('Hello World')
        cy.get('textarea.feedback-input').should('have.attr','name','message')

        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
       
    })
    
    it('Text yang disimpan tidak berhasil',()=> {
        
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('ega')
        cy.get('[name="last_name"]').type('septian')

        //cy.get('[name="email"]').type('nenekseven@gmail.com')
        cy.get('textarea.feedback-input').type('Hello World')
        cy.get('[type="submit"]').click()

        /**Cara pertama bisa pake should dan disambung and */
        //cy.get('body').should('contain','Error: all fields are required').and('contain','Error: Invalid email address')

                /**Cara Kedua bisa pake function dari value list */
        const returnSubmit = ['Error: all fields are required','Error: Invalid email address']
        returnSubmit.forEach(function (value) {
            cy.get('body').should('contain', value)
        })
    })

    }
)