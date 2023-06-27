/// <reference types= "cypress" />

describe('My Third suite', function(){

    it('My Third test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption2').should('not.be.checked').check().should('be.checked').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']).uncheck(['option1','option2','option3'])

        // select drop down

        cy.get('select').select('option1').should('have.value','option1')
        cy.get('select').select('option2').should('have.value','option2')

        // dyncamic dropdown

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() == 'India')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.get('[value="radio2"]').check().should('be.checked')
    })
})