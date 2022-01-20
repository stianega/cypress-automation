/// <reference types = "cypress" />

describe("Menggunakan variabel dan jquery", () => {
    it('Navigasi ke product category', () => {
        cy.visit('https://www.automationteststore.com/');
        
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        cy.get('h1 .maintext').then(($headingText)=>{
            const heading = $headingText.text()
            cy.log(heading)
            expect(heading).to.eq('Makeup')
        })
    })

    
    it.only('Validasi properti contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        
        //menggunakan cypress command
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
       
        //menggunakan JQuery
        cy.contains('#ContactUsFrm','Contact Us Form').then((text)=>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            cy.get('#field_11').then((textFirstName)=>{
                cy.log(textFirstName.text())
            })
        })

    })


})