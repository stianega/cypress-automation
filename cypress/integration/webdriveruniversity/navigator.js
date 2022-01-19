/// <reference types = "cypress" />

describe("Open page di web yang sama", () => {
    it('Tidak bisa ke link yang berbeda',()=>{
       cy.visit('http://www.webdriveruniversity.com/')
       cy.get('#login-portal').invoke('removeAttr','target').click({force: true})
       cy.url().should('include','Login-Portal')
       cy.go('back')
       cy.reload()
        
       cy.get('#to-do-list').invoke('removeAttr','target').click({force: true})
       cy.url().should('contain','To-Do-List')
       cy.go('back')
    })
    
 

    }
)