/// <reference types="Cypress" />
 
//Sample Test

function Launch (){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

}



describe ("Cypress Automation Testing 2",function(){

  
it("Test Case 1: Add 4 Cashews to Cart", function(){

    Launch();
    cy.get('.search-keyword').type("Ca");
    cy.wait(3000);
    //cy.get('.product:visible').should('have.length', 4);
    cy.get('.products').find('.product').each(($el, index, $list)=>{

       const textName = $el.find('h4.product-name').text();
       if(textName.includes('Cashews'))
        {
            for(var a=0; a<3; a++){

            cy.wrap($el).find('a.increment').click()
            }

            cy.wrap($el).contains('ADD TO CART').click();
       }
       
            
       
    })

    cy.get('.cart-icon img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click() 

    })

   

})
 
 
 
 
 
 
 
 
 
 
 
 
