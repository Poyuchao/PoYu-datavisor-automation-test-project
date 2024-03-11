describe('',function(){
    it('Logs in and creates a new project', ()=>{

        //visit the sign-in page 
        cy.visit('https://app.bugbug.io/sign/in');


        // Enter login credentials and submit
        cy.get('input[type="email"]').type('killyen444@gmail.com');
        cy.get('input[name="password"]').type('George89648964@');
        cy.get('button[type="submit"]').click();
    });



})