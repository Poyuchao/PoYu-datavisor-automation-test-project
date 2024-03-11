// describe('After sign in, create new project',function(){

//   // expect -> it should successfully log in and create a new project. 

//   it('Logs in and creates a new project', ()=>{

//       //visit the sign-in page 
//       // Visit the sign-in page and log in
//       // expected outcome: after fill the email and password, successfully log in 
//       cy.visit('https://app.bugbug.io/sign-in/');

   
//       cy.get('[data-testid="Input"]').first().type('killyen444@gmail.com');
//       cy.get('input[name="password"]').type('George89648964@');
//       cy.get('button[type="submit"]').click();


      
//     // Create a new project as a prerequisite for all tests ->
//     // expected outcome: successfully create new project in target website 
//       cy.get('[data-testid="ProjectList.NewProjectButton"]').click();

//       //input What is the name of the website you're going to test?
//       cy.get('input[data-testid="Input"]').first().type('bugbug new project created');
//       // input What is the main web domain for this website? 
//       cy.get('input[data-testid="Input"][name="homepageUrl"]').type('https://bugbug.io/v2/')
//       // successfully submit
//       cy.get('button[type="submit"').click();

//   });

// })


describe('Tests Management', function() {
  before(() => {
    // Visit the sign-in page and log in
    // and successfully log in 
    cy.visit('https://app.bugbug.io/sign-in/');
    cy.get('[data-testid="Input"]').first().type('killyen444@gmail.com');
    cy.get('input[name="password"]').type('George89648964@');
    cy.get('button[type="submit"]').click();

   

    // Create a new project as a prerequisite for all tests ->
    // expected outcome: successfully create new project in target website 
    cy.get('[data-testid="ProjectList.NewProjectButton"]').click();
    cy.get('input[data-testid="Input"]').first().type('bugbug new project created');
    cy.get('input[data-testid="Input"][name="homepageUrl"]').type('https://bugbug.io/v2/');
    cy.get('button[type="submit"]').click();

    // After creating the project, navigate to the test management section.
   
  });

  // create the new test case in created project
  it('allows creating a new test', () => {
    cy.get('input[placeholder="Type name here or just click ENTER button"]').type('New test case created');
    cy.get('button[data-testid="EditTestModal.SubmitButton"]').click();

  });

  // it('allows deleting a test', () => {
  //   // Code to delete a test
  // });

  // it('displays the list of tests', () => {
  //   // Code to list all tests
  // });

  // it('allows updating a test', () => {
  //   // Code to update a test
  // });

});