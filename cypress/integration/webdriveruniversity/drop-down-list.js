/// <reference types = "cypress" />

describe("Automation Checklist", () => {
    it('Select checklist data dan validasi', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        //select id dropdown list, select value dan validasi sesuai dengan text
        cy.get('#dropdowm-menu-1').select('python').should('contain.text', 'Python')

        //select id dropdown list, select text dan validasi sesuai dengan value nya
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')



    })



}
)