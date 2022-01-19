/// <reference types = "cypress" />

describe("Open page di web yang sama", () => {
    it('Tidak bisa ke link yang berbeda',()=>{

        //return error
       cy.visit('http://www.webdriveruniversity.com/')
       cy.visit('https://automationteststore.com/')
       
    })
    
    it.only('link ke web yang beda pakai chrome security disable',()=> {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
     
    })

    }
)