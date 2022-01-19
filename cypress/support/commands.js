// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('addProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    })
})

//command menggunakan parameter name
Cypress.Commands.add('contactUsInput', (user) => {
    cy.get('[name="first_name"]').type(user.firstName)
    cy.get('[name="last_name"]').type(user.lastName)
    cy.get('[name="email"]').type(user.email)
    cy.get('textarea.feedback-input').type(user.comment)
    cy.get('[type="submit"]').click()
    cy.get(user.$locator).should('contain', user.assertionText)
})

Cypress.Commands.add('addItemToBasket', (productName) => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click();
        }
    });
});



// Import commands.js using ES2015 syntax:
import 'cypress-file-upload';
