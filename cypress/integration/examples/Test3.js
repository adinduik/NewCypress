
 
//Sample Test

function Launch1 (){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

}



describe ("Cypress Automation Testing 3",function(){

  
it("Test Case 1", function(){

    Launch1()

    //Checkboxes
    cy.get('input[value="radio1"]').check()
    cy.get('input[value="radio1"]').should('be.checked')
    //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    //cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option1', 'option3']).should('have.value', 'option1', 'option3')
       
    //Static Dropdowns
    cy.get('select').select('option3').should('have.value', 'option3')

    //Dynamic Dropdowns
    cy.get('#autocomplete').type('Ni')
    cy.get('.ui-menu-item div').each(($el, index, $list)=>{

        if($el.text()==='Nigeria'){

            cy.wrap($el).click()
        }


    })
    cy.get('#autocomplete').should('have.value', 'Nigeria')


    //Visible And Invisible Elements

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')



    
       
    })

   

   

})
 
 
 
 
 
 
 
 
 
 
 
