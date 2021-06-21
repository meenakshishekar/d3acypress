Feature: login and do basic operations

    @TC1 
    Scenario: Login with the precreated username and password 
        Given the login page is displayed
        When I enter the email id 
        And I enter the password
        Then I click on the login button

    @TC2
    Scenario: Create a Project and validate that the project is listed correctly 
        Given the projects page is displayed
        When I click on the new project icon
        When I enter the name
        And I enter the description
        And I click on the add button
        Then validate the project on the list

    @TC3
    Scenario: Create a Simulation and validate that the configuration is listed correctly 
        Given that to click on created project
        When I click on new simulation button
        And I click on next button 
        And I click on projects button
        And I click on expand button 
        Then validate the created simulation configuration
