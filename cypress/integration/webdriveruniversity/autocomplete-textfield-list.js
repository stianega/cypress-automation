/// <reference types = "cypress" />

describe("Automation textfield and select list item", () => {
    it('type item and select item validation', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

       
        //get textfield dan type
        cy.get('#myInput').type('W')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=>{
            const productList =  $el.text()
            const productPick = 'Wine'
           
            if(productList === productPick){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('contain',productPick)
            }
        })
    })

    it('type item and select item validation', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

       
        //get textfield dan type
        cy.get('#myInput').type('W')

        cy.get('#myInputautocomplete-list').find("div").each(($el, index, $list)=>{
            const productList =  $el.text()
            const productPick = 'Wine'
           
            if(productList === productPick){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('contain',productPick)
            }
        })
    })

    it.only('type item and select item validation', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

       
        //get textfield dan type
        cy.get('#myInput').type('W')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=>{
            const productList =  $el.text()
            const productPick = 'Wine'
           
            if(productList === productPick){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('contain',productPick)
            }
        })
    })

}
)