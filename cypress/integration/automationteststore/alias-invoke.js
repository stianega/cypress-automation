/// <reference types = "cypress" />


describe("Alias dan invoke", () => {
    it('validasi nama product', () => {
        cy.visit('https://www.automationteststore.com/');
        
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('namaProduct')

        cy.get('@namaProduct').its('length').should('be.greaterThan',10)
        cy.get('@namaProduct').should('include','Seaweed Conditioner')
    })

    it('validasi total item berdasarkan div thumbnail',()=>{
        cy.visit('https://www.automationteststore.com/');
        cy.get('.thumbnail').as('total')
        cy.get('@total').should('have.length',16)
        cy.get('@total').find('.productcart').invoke('attr','title').should('include','Add to Cart')
        //.invoke('attr','title').should('contain','Add to Cart')
    })

    
})