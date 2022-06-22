/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage';

import ProductPage from '../../support/pageObjects/ProductPage';


describe('My ninth Test Suite', function(){

    before(function() {

        cy.fixture('example').then(function(data){

            this.data = data
        })
        

      })

    it('My ninth Test Case', function(){

        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url'))


        homePage.getEditBox().type(this.data.name)

        homePage.getGender().select(this.data.gender)
      
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        homePage.getEditBox().should('have.attr', 'minlength', '2')

        homePage.getDisabledRadioButton().should('be.disabled')

        //shop link visit customize commands

       homePage.getShopTab().click()

        this.data.productName.forEach(productName => {
            
            cy.selectProducts(productName)
        });

        productPage.checkoutButton().click()

        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{

          const amount = $el.text()
          var res =amount.split(" ")
          res = res[1].trim()
          sum = Number(sum)+Number(res)
         

        }).then(()=>{
          cy.log(sum)
        })
        cy.get('h3 strong').then(($element)=>{

          const amount2 = $element.text()
          var res =amount2.split(" ")
          var total = res[1].trim()

          expect(Number(total)).to.equal(sum)


        })

        cy.contains('Checkout').click()

        cy.get('#country').type('India')


        cy.get('.suggestions > ul > li > a').click()

        cy.get('#checkbox2').click({force: true})

        cy.get('input[type="submit"]').click()

      //  cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

      cy.get('.alert').then((e)=>{

         const elementText=  e.text()

         expect(elementText.includes('Success!')).to.be.true


      })

    })

   

})