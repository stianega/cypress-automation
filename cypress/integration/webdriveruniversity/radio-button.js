/// <reference types = "cypress" />

describe("Automation radiobutton & validate", () => {
    it('Check radiobutton and validate', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        //get id radiobutton kemudian mencari type radio dan mengecek tidak di cek
        cy.get('#radio-buttons').find("[type='radio']").should('not.be.checked')   

        // check radio button menggunakan index 1 
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check() 

        //check radio button menggunakan value yellow
        cy.get('#radio-buttons').find("[type='radio']").check('yellow').should('be.checked')

    

    })

    it('check radio button langsung dari valuenya', () => {

    //check radio button langsung dari value
       cy.get("[value='lettuce']").check()

    //validasi radio button yang disable
    cy.get("[value='cabbage']").should('be.disabled')


    })

}
)