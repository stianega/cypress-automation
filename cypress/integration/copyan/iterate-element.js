/// <reference types = "cypress" />


describe("Iterate callback", () => {
    it.only('callback iterate item name', () => {
        cy.visit('https://www.automationteststore.com/');
        
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            cy.log('item ke- ' + (index + 1) + ' adalah ' + $el.text())
        })
    })

    
    it('callback element yang di wrap kemudian click', () => {
        cy.visit('https://www.automationteststore.com/');
        
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            
            if ($el.text() == 'Eau Parfumee au The Vert Shampoo'){
                cy.wrap($el).click()
            }
        })

    })


})