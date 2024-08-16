//Sample Test

 function Launch (){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

}



describe ("Cypress Automation Testing",function(){

    
it("Test Case 1: Launch Page", function(){

    //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    Launch();
    cy.get('.search-keyword').type("Cucumber");
    cy.get('.search-button').click();
})

it("Test Case 2: Validate Page Title", function(){

    Launch();
    cy.get('.brand').then((logo)=>{

        cy.log(logo.text());

      })
    
        cy.get('.brand').should('have.text', 'GREENKART')

     

})

it("Test Case 3: Search for Products with 'ca'", function(){

    Launch();
    cy.get('.search-keyword').type("Ca");
    cy.wait(3000);
    //cy.get('.product:visible').should('have.length', 4);
    cy.get('.products').find('.product').should('have.length', 4);
    
})

it("Test Case 4: Purchase 4 Cashews - 1kg", function(){

    Launch();
    cy.get('.search-keyword').type("Ca");
    cy.wait(3000);
    //cy.get('.product:visible').should('have.length', 4);
    cy.get('.products').find('.product').each(($el, index, $list)=>{

       const textName = $el.find('h4.product-name').text();
       if(textName.includes('Cashews'))
        {
            for(var a=0; a<3; a++){

            cy.wrap($el).find('a.increment').click();
            }

            cy.wrap($el).contains('ADD TO CART').click();

       }
    })
    cy.get('.cart-icon img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

    })

    

})