/// <reference types = "cypress" />


    /**
     * Untuk custom command harus menambahkan import './commands.js' pada index.js
     */

describe("Iterate callback", () => {
    beforeEach(function(){
        cy.visit('https://www.automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    })
    
    it('Add product 1', () => {
        cy.addProduct("Pantene Pro-V Conditioner, Classic Care")
    })

    it('add Product 2', () => {
        cy.addProduct("Seaweed Conditioner")
    })



})