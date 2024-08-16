
 
//Sample Test

function Launch3 (){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

}



describe ("Cypress Automation Testing 5",function(){

  
it("Test Case 1", function(){

    Launch3()
    cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{

        const coursetitle = $el.text()

        if(coursetitle==='Master Selenium Automation in simple Python Language'){

            //cy.get('tr td:nth-child(2)').eq(index).next().should('have.text', '25')
            //cy.get('tr td:nth-child(2)').eq(index).prev().should('have.text', 'Rahul Shetty')
            cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{

               expect(price.text()).to.equal('25')
            })

            cy.get('tr td:nth-child(2)').eq(index).prev().then((instructor)=>{

                expect(instructor.text()).to.equal('Rahul Shetty')
             })

        }
    })

    //cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url(). should('contain', 'top')


       
    })

   
   
})
 
 
 
 
 
 
 
 
 
 
 
