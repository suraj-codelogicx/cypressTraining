/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('JWT session', function(){


    it('is logged in through local storage', function(){

        cy.LoginAPI().then(function(){
            cy.visit("https://rahulshettyacademy.com/client/",{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',  Cypress.env('token'))
                }
            })
        })
       
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click()
        cy.contains('Checkout').click()
        cy.get("[placeholder*='Select Country']").type('indi')
        cy.get('.form-group > .input').each(function($el, $index, $list) {
            if($el.text ==='india'){

                cy.wrap($el).click()
            }
        })

        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.get('.order-summary button').click()

    })

   

})