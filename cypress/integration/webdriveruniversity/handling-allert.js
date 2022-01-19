/// <reference types = "cypress" />

describe("Validasi allert", () => {
    it('handle allert dan return text', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })

    })

    it('Handle confirm allert text press OK', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')


    })

    it('Handle confirm allert text press cancell', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#button4').click()

        cy.on('window:confirm',(str)=>{
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
})

it('Handle js confirm using stub', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

    

    const stub = cy.stub()
    cy.on('window:confirm',stub)

    cy.get('#button4').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(()=>{
        return true
    }).then(()=>{
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })
})

}
)