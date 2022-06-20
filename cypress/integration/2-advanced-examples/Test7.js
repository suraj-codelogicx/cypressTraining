/// <reference types="Cypress" />


describe('My First Test Suite', function(){


    it('My First Test Case', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then((e1)=>{

           const url = e1.prop('href')
           cy.visit(url)
        })
      
       


    })

   

})