import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


Given('the login page is displayed', () => {
    cy.visit('https://www.d3a.io/login');
});
When('I enter the email id', () => {
    cy.get('input#email').type('meenakshi28392@gmail.com');
});
And('I enter the password', () => {
    cy.get('input#password').type('Deepthi@1');
});
Then('I click on the login button', () => {
    cy.get('.button.button--accent').click();
});

Given('the projects page is displayed', () => {
    cy.get('.icon-projects > use').click();
});
When('I click on the new project icon', () => {
    cy.get('.button.button--accent.button-icon > .button__label').click();
});
When('I enter the name', () => {
    cy.get('input#input-field-name').type('Project1');
});
And('I enter the description', () => {
    cy.get('textarea#textarea-field-nameTextArea').type('Create a project for test');
});
And('I click on the add button', () => {
    cy.get('.library-name-modal__container .button__label').click();
});
Then('validate the project on the list', () => {
    cy.wait(1000)
    cy.get('[class="saved-project__headline__name__text"]').contains('Project1');
});

Given('that to click on created project', () => {
    cy.get('[class="saved-project__headline__name__text"]').contains('Project1').click();
});    
When('I click on new simulation button', () => {
    cy.wait(1000);
    cy.get('.saved-project__list .button__label').click();
});
And('I click on next button', () => {
    cy.get('.button__label').click();
});
And('I click on projects button', () => {
    cy.get('.icon-projects > use').click();
});
And('I click on expand button', () => {
    cy.get('[class="saved-project__headline__name__text"]').contains('Project1').click();
});
Then('validate the created simulation configuration', () => {
    cy.get('.saved-config--pct-width__title__name > p').should('have.text', 'default simulation');
});
    
