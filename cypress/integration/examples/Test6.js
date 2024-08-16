
 
//Sample Test

function Launch4 (){
    cy.visit('/AutomationPractice/');

}



describe ("Cypress Automation Testing 6",function(){

  
it("Test Case 1", function(){

    Launch4()
    cy.get('#opentab').then((el)=>{

        const newUrl = el.prop('href')
        cy.visit(newUrl)
        cy.get('div.sub-menu-bar a[href="about.html"]').click()

    })


       
    })

   
   
})
 
 
 
 
 
 
 
 
 
 
 
