/// <reference types= "cypress" />

describe('My Second suite', function(){

    it('My Second test', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        //cy.get(':nth-child(n) > .product-image > img').should('have.length',4)
        cy.get('.products').as('productLocator')
      
        cy.get('@productLocator').find('.product').each(($el , index, $list) => {

            const prodName = $el.find('h4.product-name').text()
            
            if(prodName.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
            
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()



    })
})