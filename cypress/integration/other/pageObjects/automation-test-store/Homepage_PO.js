class Homepage {
    visitHomePage(){
        cy.visit('https://www.automationteststore.com/')
    }

    visitHairCare(){
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    }

    addHairCareItem(){
        data.productName.forEach(element => {
            cy.addItemToBasket(element)
        });
        cy.get('.fa-shopping-cart').first().click({ force: true })
    }
}

export default Homepage