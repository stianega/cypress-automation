/// <reference types = "cypress" />

describe("Test Contacts Us from website", () => {
    it('Text yang disimpan harus berhasil', () => {
        cy.visit('https://www.automationteststore.com/');
        //cy.get('.info_links_footer > :nth-child(5) > a').click()

        /**
         * menggunakan promises return element ang di ambil dan di print
         */
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click().then((urlLink)=>{
            console.log(urlLink.text())
        })
        cy.get('#ContactUsFrm_first_name').type('Ega Septian');
        cy.get('#ContactUsFrm_email').type('egaseptian@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');

        cy.get('#ContactUsFrm_enquiry').type('do you have any discount to me?');
        cy.xpath("//button[@title='Submit']").contains('Submit').click();
        //cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]");
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    })



})