describe('After sign in, create new project', function() {
  it('Logs in and creates a new project', () => {
    // Visit the sign-in page and log in
    cy.visit('https://app.bugbug.io/sign-in/');
    cy.get('[data-testid="Input"]').first().type('killyen444@gmail.com');
    cy.get('input[name="password"]').type('George89648964@');
    cy.get('button[type="submit"]').click();

    // Click the button to create a new project forcefully
    cy.get('[data-testid="ProjectList.NewProjectButton"]').click({ force: true });

    // Input project details and submit
    cy.get('input[data-testid="Input"]').first().type('bugbug new project created');
    cy.get('input[data-testid="Input"][name="homepageUrl"]').type('https://bugbug.io/v2/');
    cy.get('button[type="submit"]').click();
  });
});


// tests Management
describe('Tests Management', function() {
  beforeEach(() => {
    // Visit the sign-in page and log in
    // and successfully log in 
    cy.visit('https://app.bugbug.io/sign-in/');
    cy.get('[data-testid="Input"]').first().type('killyen444@gmail.com');
    cy.get('input[name="password"]').type('George89648964@');
    cy.get('button[type="submit"]').click();

   
    // Wait for the overlay to disappear
    cy.get('[data-testid="Backdrop"]').should('not.exist');
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



  // // Expected result successfully delete the test case 
  it('allows deleting a test', () => {
    cy.get('input[placeholder="Type name here or just click ENTER button"]').type('New test case 1 created');
    cy.get('button[data-testid="EditTestModal.SubmitButton"]').click();
    cy.get('[data-testid="ArrowBackRoundedIcon"]').first().click();

    // Simulate hover over the row to make the dropdown button visible
    // Force the trigger of the mouseover event
    cy.get('div[data-testid="TestRowActions"]').trigger('mouseover', { force: true });


    // Click the dropdown button after the 'hover' action
    // Force the click on the dropdown button without hovering
    cy.get('button[data-testid="Dropdown.IconButton"]').click({ force: true });


    //click the delete in drop down menu
    cy.get('button[data-testid="TestRowActions.DeleteButton"]').click();

    //target button which contains delete test 
    cy.get('button[data-testid="Button"]').contains('Delete test').click();


  });


  // Expected result the test case named New test case created is visible 
  it('displays the list of tests', () => {

    // create the test case named New test case created
    cy.get('input[placeholder="Type name here or just click ENTER button"]').type('New test case created');
    cy.get('button[data-testid="EditTestModal.SubmitButton"]').click();
    cy.get('[data-testid="ArrowBackRoundedIcon"]').first().click();

    // check if the test case(new test case created) is visible 
    cy.contains('New test case created').should('be.visible');
  });


  // Updated the test case name -> expected result, the test name should successfully updated 
  it('allows updating a test', () => {
    // create the test case named New test case created
    cy.get('input[placeholder="Type name here or just click ENTER button"]').type('New test case created');
    cy.get('button[data-testid="EditTestModal.SubmitButton"]').click();
    cy.get('[data-testid="ArrowBackRoundedIcon"]').first().click();

    // click the test case named (New test case created)
    cy.contains('New test case created').click();
    cy.get('input[data-testid="Input"]').clear().first().type('New Test Name created');
    cy.get('button[aria-label="Back"][data-testid="IconButton"]').click();



  });

});

//Suites management
describe('Tests Suites management', function() {
  beforeEach(() => {
    // Visit the sign-in page and log in
    // and successfully log in 
    cy.visit('https://app.bugbug.io/sign-in/');
    cy.get('[data-testid="Input"]').first().type('killyen444@gmail.com');
    cy.get('input[name="password"]').type('George89648964@');
    cy.get('button[type="submit"]').click();

    // Wait for the overlay to disappear
    cy.get('[data-testid="Backdrop"]').should('not.exist');

    // Create a new project as a prerequisite for all tests ->
    // expected outcome: successfully create new project in target website 
    cy.get('[data-testid="ProjectList.NewProjectButton"]').click();
    cy.get('input[data-testid="Input"]').first().type('bugbug new project created');
    cy.get('input[data-testid="Input"][name="homepageUrl"]').type('https://bugbug.io/v2/');
    cy.get('button[type="submit"]').click();

    // After creating the project, navigate to the Suites management section.
    


  });

  // create the new test Suites in created project -> expected result new suite successfully created
  it('allows creating a new test Suites', () => {

    // click cancel button 
    cy.get('button[data-testid="EditTestModal.CancelButton"]').click();

    // click the suites button 
    cy.get('svg[data-testid="SuitesIcon"]').click();

    // click new suite 
    cy.get('button[data-testid="SuitesActions.CreateNewSuite"').click();

    // input the New suite created to "Suite name" input field
    cy.get('input[data-testid="Input"][name="name"]')
    .clear({ force: true }) // Force clearing any existing value
    .type('New suite created', { force: true }); // Force typing the new value

  


    //click "create suite" button 
    cy.get('button[data-testid="Button"]').contains('Create suite').click();

  });

//  Expected result successfully delete the Suite
  it('allows deleting a test suite', () => {
    cy.get('button[data-testid="EditTestModal.CancelButton"]').click();

    // click the suites button 
    cy.get('svg[data-testid="SuitesIcon"]').click();

    // click new suite 
    cy.get('button[data-testid="SuitesActions.CreateNewSuite"').click();

    // input the New suite created to "Suite name" input field
    cy.get('input[data-testid="Input"][name="name"]')
    .clear({ force: true }) // Force clearing any existing value
    .type('New suite created', { force: true }); // Force typing the new value

    //   //click "create suite" button 
    cy.get('button[data-testid="Button"]').contains('Create suite').click();


    // Simulate hover over the row to make the dropdown button visible
    // Assuming 'div[data-testid="SuiteRowActions"]' is the container that needs to be hovered
    cy.get('div[data-testid="SuiteRowActions"]').trigger('mouseover', { force: true });

    // Click the dropdown button after the 'hover' action
    // Force the click on the dropdown button without hovering
    cy.get('button[data-testid="Dropdown.IconButton"]').click({ force: true });



    //click the delete in drop down menu
    cy.get('button[data-testid="SuiteRowActions.DeleteButton"]').click();

    //click yes to confirm delete
    cy.get('button[data-testid="ConfirmModal.ConfirmButton"]').contains("Yes").click();

  });

  //  Expected result the test suite named New suite created is visible 
  it('displays the list of suite', () => {

       // click cancel button 
    cy.get('button[data-testid="EditTestModal.CancelButton"]').click();

    // click the suites button 
    cy.get('svg[data-testid="SuitesIcon"]').click();

    // click new suite 
    cy.get('button[data-testid="SuitesActions.CreateNewSuite"').click();

    // input the New suite created to "Suite name" input field
    cy.get('input[data-testid="Input"][name="name"]')
    .clear({ force: true }) // Force clearing any existing value
    .type('New suite created', { force: true }); // Force typing the new value

  
    //click "create suite" button 
    cy.get('button[data-testid="Button"]').contains('Create suite').click();

    // check if the test suite(New suite created) is visible 
    cy.contains('New suite created').should('be.visible');
  });


    // Updated the test suite name -> expected result, the test suite should successfully updated to "updated suite name"
  it('allows updating a test suite', () => {
    //initially create new suite named New suite created
    // click cancel button 
    cy.get('button[data-testid="EditTestModal.CancelButton"]').click();

    // click the suites button 
    cy.get('svg[data-testid="SuitesIcon"]').click();

    // click new suite 
    cy.get('button[data-testid="SuitesActions.CreateNewSuite"').click();

    // input the New suite created to "Suite name" input field
    cy.get('input[data-testid="Input"][name="name"]')
    .clear({ force: true }) // Force clearing any existing value
    .type('New suite created', { force: true }); // Force typing the new value

  
    //click "create suite" button 
    cy.get('button[data-testid="Button"]').contains('Create suite').click();

    // click the test suite named (New suite created)
    cy.contains('New suite created').click();
    cy.get('input[data-testid="Input"][name="name"]')
    .clear({ force: true }) // Force clearing any existing value
    .type('updated suite name', { force: true }); // Force typing the new value

    //save data
    cy.get('button[data-testid="Button"]').contains('Save').click();


  });
});