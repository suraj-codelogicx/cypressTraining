/// <reference types="Cypress" />


context('Window', function(){


    it('Database Interactions', function(){


        cy.sqlServer("SELECT * FROM `persons` WHERE 1").then(function(result){

            console.log(result[0][1]);
        })

    })
   
   

})