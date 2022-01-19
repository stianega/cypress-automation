/// <reference types = "cypress" />


describe("alias invoke iterable variable", () => {
    it('menjumlahkan sale item dan non diskon', () => {
        cy.visit('https://www.automationteststore.com/');

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('normalPrices')
        cy.get('.price').find('.pricenew').invoke('text').as('discountPrice')

        var totalNormalPrice = 0;
        var totalDiscountPrice = 0;
        var totals =0
        cy.get('@normalPrices').then((itemsPrice) => {
            var price = itemsPrice.split('$')
            var totalPrices = 0
            for (let i = 0; i < price.length; i++) {
                cy.log(price[i])
                totalPrices += Number(price[i])
            }
            cy.log(totalPrices.toFixed(2))
            totalNormalPrice = + totalPrices
        }).then(() => {
            cy.get('@discountPrice').then((itemsPrice) => {
                var price = itemsPrice.split('$')
                var totalPrices = 0
                for (let i = 0; i < price.length; i++) {
                    cy.log(price[i])
                    totalPrices += Number(price[i])
                }
                cy.log(totalPrices.toFixed(2))
                totalDiscountPrice = + totalPrices
                cy.log(totalDiscountPrice)
                cy.log(totalNormalPrice)
                
            })
        }).then(()=>{
            totals = totalDiscountPrice + totalNormalPrice
                expect(totals).eq(totalNormalPrice + totalDiscountPrice)
        })


    })


})