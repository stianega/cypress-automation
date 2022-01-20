/// <reference types = "cypress" />

describe("Inspect item menggunakan automation", () => {
    it('inspect item dari header', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it.only('inspect item menggunakan class', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemTitle)=>{
            cy.log(itemTitle.text())
        })
    })

    it('inspect item menggunakan index', () => {
        cy.visit('https://www.automationteststore.com/');
        /**
         * 1. get wrapper yang bungkus tiap index item
         * 2. find class product nya
         * 3. input index ke berapa yang ingin di click
         */
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})