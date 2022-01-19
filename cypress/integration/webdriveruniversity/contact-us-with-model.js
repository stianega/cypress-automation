import HomePage from '../other/pageObjects/webDriverUniObjects/Homepage_PO'
import ContactUsForm from '../other/pageObjects/webDriverUniObjects/ContactUsForm_PO'
/// <reference types = "cypress" />

describe("visit menggunakan base url & isi menggunakan global variabel", () => {

    const homePage = new HomePage()
    const contactUsForm = new ContactUsForm()

    before(function () {
        cy.fixture('users').then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        homePage.visitHomePage()
        homePage.clickContactUs()
    })

    it('submit contact-us', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', '/contactus.html')

        contactUsForm.contactUsFillPass(data.firstName, data.lastName, data.email, data.comments, 'h1', 'Thank You for your Message!')

    })

    it('Empty Email address',()=>{
        contactUsForm.contactUsFillPass(data.firstName, data.lastName, ' ', data.comments, 'body', 'Error: Invalid email address')

    })

    it('Empty Fill',()=>{
        contactUsForm.contactUsFillEmpty('body','Error: all fields are required','Error: Invalid email address')
    })



}
)