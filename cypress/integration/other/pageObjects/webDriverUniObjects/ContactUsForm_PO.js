class ContactUsForm {
    contactUsFillPass(firstName, lastName, email, comment, $selector, assertionText) {
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="first_name"]').should('have.attr', 'name', 'first_name')
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="last_name"]').should('have.attr', 'name', 'last_name')
        cy.get('[name="email"]').type(email)
        cy.get('[name="email"]').should('have.attr', 'name', 'email')
        cy.get('textarea.feedback-input').type(comment)
        cy.get('textarea.feedback-input').should('have.attr', 'name', 'message')

        cy.get('[type="submit"]').click()
        cy.get($selector).should('contain', assertionText)
    }

    contactUsFillEmpty($selector, assertionText1, assertionText2) {


        cy.get('[type="submit"]').click()
        cy.get($selector).should('contain', assertionText1).and('contain', assertionText2)
    }

}

export default ContactUsForm