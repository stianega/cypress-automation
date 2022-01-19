/// <reference types = "cypress" />

describe("File upload handler", () => {
    it('Upload file dan melakukan validate file telah di upload ', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myFile').attachFile('laptop.png',{subjectType:'input'})
        cy.get('#submit-button').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.contains('Your file has now been uploaded!')
        })
    })

    it('Upload tanpa file dan melakukan validasi', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#submit-button').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.contains('You need to select a file to upload!')
        })
    })

}
)