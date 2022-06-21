/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage';

import ProductPage from '../pageObjects/ProductPage';


describe('My First Test Suite', function(){

    before(function() {

        cy.fixture('example').then(function(data){

            this.data = data
        })
        

      })

    it('My First Test Case', function(){

        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')


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