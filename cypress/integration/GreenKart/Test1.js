/// <reference types="Cypress" />


describe('My First Test Suite', function(){


    it('My First Test Case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').should('have.length', 4)

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(()=>{
            console.log("logged successfully");
        })

        cy.get('@productLocator').find('.product').each(($e1, index, $list) =>{

          const textVeg=  $e1.find('h4.product-name').text()

          if(textVeg.includes('Cashews')){
            cy.wrap($e1).find('button').click()
          }

        })

        //this is to print logs
        cy.get('.brand').then((logoElement)=>{

           cy.log(logoElement.text())

        })

        //assert if logo text is displayed correctly
        cy.get('.brand').should('have.text', 'GREENKART')


    })

   

})