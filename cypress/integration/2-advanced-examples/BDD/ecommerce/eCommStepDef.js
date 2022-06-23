/// <reference types="Cypress" />

import HomePage from '../../../../support/pageObjects/HomePage';

import ProductPage from '../../../../support/pageObjects/ProductPage';

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage()
const productPage = new ProductPage()
let name

Given('I open a Ecommerce Page', ()=>{

    cy.visit(Cypress.env('url'))
})
When('I add items to cart',function(){

    homePage.getShopTab().click()

        this.data.productName.forEach(productName => {
            
            cy.selectProducts(productName)
        });

        productPage.checkoutButton().click()
})
And('Validate the total prices',function(){

    var sum = 0

    cy.get('tr td:nth-child(4) strong').each(function($el, index, $list){

        const amount = $el.text()
        var res =amount.split(" ")
        res = res[1].trim()
        sum = Number(sum)+Number(res)
       

      }).then(function(){
        cy.log(sum)
      })
      cy.get('h3 strong').then(function($element){

        const amount2 = $element.text()
        var res =amount2.split(" ")
        var total = res[1].trim()

        expect(Number(total)).to.equal(sum)


      })

})
Then('select the country submit and verify thankyou',()=>{

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
When('I fill the form details',function(dataTable){

    name = dataTable.rawTable[1][0]
     
    homePage.getEditBox().type(name)

    homePage.getGender().select(this.data.gender)

})
Then('Validate the form behaviour',function(){

    homePage.getTwoWayDataBinding().should('have.value', name)

    homePage.getEditBox().should('have.attr', 'minlength', '2')

    homePage.getDisabledRadioButton().should('be.disabled')

  
})
And('Select the shop page',function(){

      //shop link visit customize commands

   homePage.getShopTab().click()

})