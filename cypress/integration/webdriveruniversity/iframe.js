/// <reference types = "cypress" />

describe("Handling iframe & modals", () => {
    it('Handle  iframe modals', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#frame').then(($element)=>{
            const body = $element.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').then(($element)=>{
            const text = $element.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods ')
        })
        cy.get('@modal').contains('Close').click()
    })



}
)