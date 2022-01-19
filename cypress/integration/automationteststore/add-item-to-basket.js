/// <reference types = "cypress" />
import Homepage_PO from '../other/pageObjects/automation-test-store/Homepage_PO'

describe("Add item to basket", () => {
    const homepage_PO = new Homepage_PO()

    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        homepage_PO.visitHomePage()
        homepage_PO.visitHairCare()
    });

    it('add item from json users to basket', () => {
        homepage_PO.addHairCareItem()
    });



});