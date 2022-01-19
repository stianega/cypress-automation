/// <reference types = "cypress" />



describe("Input textfield and validation", () => {
    before(function () {
        cy.fixture('users.json').then(data => {
            globalThis.data = data
        })
    })
    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    })


    //menggunakan parameter name
    it('Text yang disimpan harus berhasil', function () {
        // cy.get('[name="first_name"]').type('Ega')
        // cy.get('[name="first_name"]').should('have.attr','name','first_name')
        // cy.get('[name="last_name"]').type('Septian')
        // cy.get('[name="last_name"]').should('have.attr','name','last_name')
        // cy.get('[name="email"]').type('nenekseven@gmail.com')
        // cy.get('[name="email"]').should('have.attr','name','email')
        // cy.get('textarea.feedback-input').type('Hello World')
        // cy.get('textarea.feedback-input').should('have.attr','name','message')

        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text','Thank You for your Message!')

        cy.contactUsInput({ firstName: data.firstName, lastName: data.lastName, email: data.email, comment: data.comments, $locator: 'h1', assertionText: 'Thank You for your Message!' })

    })

    it.only('Text yang disimpan gagal email tidak diisi', function () {

        cy.contactUsInput({ firstName: data.firstName, lastName: data.lastName, email: ' ', comment: data.comments, $locator: 'body', assertionText: 'Error: Invalid email address' })

    })





    it('Text yang disimpan tidak berhasil', () => {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('ega')
        cy.get('[name="last_name"]').type('septian')

        //cy.get('[name="email"]').type('nenekseven@gmail.com')
        cy.get('textarea.feedback-input').type('Hello World')
        cy.get('[type="submit"]').click()

        /**Cara pertama bisa pake should dan disambung and */
        //cy.get('body').should('contain','Error: all fields are required').and('contain','Error: Invalid email address')

        /**Cara Kedua bisa pake function dari value list */
        const returnSubmit = ['Error: all fields are required', 'Error: Invalid email address']
        returnSubmit.forEach(function (value) {
            cy.get('body').should('contain', value)
        })
    })

}
)