/// <reference types= "cypress" />

describe('My Fifth suite', function()

    {
        it('My Fifth case',function()
        {
        //Check boxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
       
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true}) // force click for hidden elements
         
        cy.url().should('include','top') 
         
         
         
         
         
         
    })
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        }  )
