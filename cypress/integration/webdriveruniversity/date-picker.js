/// <reference types="Cypress" />
describe("Handling datepicker webdriveruni", () => {
    it("Pick from datepicker", () => {
        cy.visit('http://www.webdriveruniversity.com/')

        //scrollIntoView untuk mengarahkan view sesuai dengan scroll yang ditujunya.
        cy.get('#datepicker').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#datepicker').click()


        const date = new Date()
        date.setDate(date.getDate()+1)
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()

        cy.log(day)
        cy.log(month)
        cy.log(year)


        function selectDay(){
           cy.get('.day').contains(day).click()
        }
        

        function selectMonthAndYear(){
            cy.get('.datepicker-switch').first().then((dateYears)=>{
                var dateYear = dateYears.text()
              if (!dateYear.includes(year)) {
                    cy.get('.next').first().click()       
                }
            }).then(()=>{
                cy.get('.datepicker-switch').first().then((dateMonths)=>{
                    var dateMonth = dateMonths.text()
                     if (!dateMonth.includes(month)) {
                        cy.get('.next').first().click()
                        return selectMonthAndYear();
                    }
                })
            })
        }
        selectMonthAndYear()
        selectDay()
    });



});