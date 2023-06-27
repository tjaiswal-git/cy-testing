/// <reference types= "cypress" />

describe('My first suite', function(){

    it('My first test', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        //cy.get(':nth-child(n) > .product-image > img').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el , index, $list) => {

            const prodName = $el.find('h4.product-name').text()
            
            if(prodName.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
            
        })

        // sometime we need to handle promise by explict
        cy.get('.brand').then(logo =>
        {
            cy.log(logo.text())
        })
        
        cy.get('.brand').then(function(logo)
        {
            cy.log(logo.text())
        })

    })
})