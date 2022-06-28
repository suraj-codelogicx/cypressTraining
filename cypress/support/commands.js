// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('selectProducts', function(productName){ 

    cy.get('h4.card-title').each(($el, index, $list) =>{

        if($el.text().includes(productName)){
    
            cy.get('button.btn.btn-info').eq(index).click()
        }
    
    })

 })

 Cypress.Commands.add("LoginAPI",()=>{
    cy.request("Post", "https://rahulshettyacademy.com/api/ecom/auth/login",{"userEmail":"abbypra28@gmail.com","userPassword":"MjyVYjBNm9@w5u4"}).then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token) 
    })

 })


//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
