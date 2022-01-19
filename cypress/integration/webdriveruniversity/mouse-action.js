/// <reference types = "cypress" />

describe("Automation Drag & Drop, double click", () => {
    it('Drag & Drop event', () => {
        cy.visit('http://www.webdriveruniversity.com/')

        //scrollIntoView untuk mengarahkan view sesuai dengan scroll yang ditujunya.
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        //get element kotak yang ingin di drag, trigger mousedown(artinya click tahan)
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove', { which: 1 }).trigger('mouseup', { force: true })

    })

    it('Double Click event', () => {
        cy.visit('http://www.webdriveruniversity.com/')

        //scrollIntoView untuk mengarahkan view sesuai dengan scroll yang ditujunya.
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        //get element DOM dan lakukan double click
        cy.get('#double-click').dblclick()

    })

    it('Hold and validate', () => {
        cy.visit('http://www.webdriveruniversity.com/')

        //scrollIntoView untuk mengarahkan view sesuai dengan scroll yang ditujunya.
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        //get element DOM , hold dan validasi
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then($el => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    })

    it.only('Hover and validate', () => {
        cy.visit('http://www.webdriveruniversity.com/')

        //scrollIntoView untuk mengarahkan view sesuai dengan scroll yang ditujunya.
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        //get element DOM , hover dan validasi
        cy.get("[class='dropdown hover']").contains('Hover Over Me First!').next('.dropdown-content').then($el => {
            cy.wrap($el).invoke('show').contains('Link 1').click()
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Well done you clicked on the link!')
            })
        })


        cy.get("[class='dropdown']").contains('Hover Over Me Second!').next('.dropdown-content').then($el => {
            cy.wrap($el).invoke('show').contains('Link 1').click()
            

        }).then(()=>{
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Well done you clicked on the link!')
            })
        })
        cy.get("[class='dropdown']").contains('Hover Over Me Third!').next('.dropdown-content').then($el => {
            cy.wrap($el).invoke('show').contains('Link 1').click()
            
        }).then(()=>{
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Well done you clicked on the link!')
            })
        })

        //cy.xpath("//button[normalize-space()='Hover Over Me First!']").invoke('trigger','mousemove')

    })






}
)