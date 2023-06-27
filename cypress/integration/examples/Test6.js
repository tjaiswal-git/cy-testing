/// <reference types= "cypress" />

describe('My Fifth suite', function()

    {
        it('My Fifth case',function()
        {
        //Check boxes
        cy.visit("http://qaclickacademy.com/practice.php")
       
         cy.get('tr td:nth-child(2)').each(($el, index , $list) => {
            const txt = $el.text()
            if(txt.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(price =>{
                    const finalPrice = price.text()
                    expect(finalPrice).to.equal('25')
                })
            }
         })
         
         
         
         
         
         
         
         
    })
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        }  )
