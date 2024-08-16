
 
//Sample Test

function Launch2 (){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

}



describe ("Cypress Automation Testing 4",function(){

  
it("Test Case 1", function(){

    Launch2()
    cy.get('#alertbtn').click()

    //Window Alerts
    cy.on('window:alert', (errmsg)=>{

        expect(errmsg).to.equal('Hello , share this practice page and share your knowledge')

    })

    //Window Confirms
    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (errmsg)=>{

        expect(errmsg).to.equal('Hello , Are you sure you want to confirm?')

    })


    //Handling child tabs

    cy.get('#opentab').invoke('removeAttr', 'target').click();
   
    cy.origin('https://www.qaclickacademy.com/', () =>{
        cy.get('.button.float-left .main-btn').click()

    })




       
    })

   
   
})
 
 
 
 
 
 
 
 
 
 
 
