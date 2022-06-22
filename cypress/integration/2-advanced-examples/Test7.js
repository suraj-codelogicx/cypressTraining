/// <reference types="Cypress" />


describe('My seventh test Suite', function(){


    it('My seventh Case', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then((e1)=>{

           const url = e1.prop('href')
           cy.visit(url)
        })
      
       


    })

   

})