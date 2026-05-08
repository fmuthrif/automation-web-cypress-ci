Feature: Login Feature

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter "Admin" and "admin123"
        And I click the login button
        Then I should see the dashboard page

    Scenario: Login with invalid credentials
        Given I am on the login page
        When I enter "invalidUser" and "invalidPass"
        And I click the login button
        Then I should see an error message "Invalid credentials"