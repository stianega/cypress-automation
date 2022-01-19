/// <reference types="Cypress" />
describe("Handling data webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({
            force: true
        });
    })
    it("Calculate data all age users", () => {
        var dataList = []
        var total = 0
        cy.get('#thumbnail-1 td').each((items, index, list) => {
            dataList[index] = items.text()
        }).then(() => {
            for (let i = 0; i < dataList.length; i++) {

                if (Number(dataList[i])) {
                    total += Number(dataList[i])


                }
            }
            expect(total).to.eq(322)
        })

    });

    it.only("Calculate & assert based on name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each((data, index, list)=>{
            var lastName = data.text()
            if(lastName.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(3)').eq(index).then((age)=>{
                    var ageData = age.text()
                    expect(ageData).to.eq('80')
                })
            }
        })

    });



});