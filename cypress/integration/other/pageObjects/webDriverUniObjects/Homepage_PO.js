class HomePage {
    visitHomePage(){
        cy.visit('/')
    }

    clickContactUs(){
        cy.get('#contact-us').invoke('removeAttr','target').click({force: true})
    }
}

export default HomePage