/// <reference types = "cypress" />


describe("Automation checkbox & validate", () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })

    it('Check checkbox and validate', () => {


        cy.get("input[value='option-3']").uncheck()

        //Melakukan auto checkbox value option-1
        cy.get("[type='checkbox']").check('option-1')

        //Melakukan validasi checkbox yang dicheck
        cy.get("[type='checkbox']").check('option-1').should('be.checked')

        //Melakukan validasi checkbox yang tidak dicheck menggunakan x-path
        cy.xpath("//input[@value='option-2']").should('not.be.checked')

        cy.get("input[value='option-2']").check()

        //uncheck semua checkbox
        cy.get(':checkbox').uncheck()

    })

    it('Check all, uncheck all, check option(1,2,3), uncheck option(1,2,3)', () => {


        //check all
        cy.get(":input[type='checkbox']").check().should('be.checked')

        //uncheck all
        cy.get(":input[type='checkbox']").uncheck().should('not.be.checked')

        //check option (1,2,3)
        cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3']).should('be.checked')

        //uncheck option (1,2,3)
        cy.get("input[type='checkbox']").uncheck(['option-1', 'option-2', 'option-3']).should('not.be.checked')

    })

}
)