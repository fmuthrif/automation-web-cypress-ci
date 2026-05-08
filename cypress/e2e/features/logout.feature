Feature: Logout Feature

    Scenario: User can log out successfully
        Given I am on the login page
        When I enter "Admin" and "admin123"
        And I click the login button
        Then I should see the dashboard page
        When I click the logout button
        Then I should be redirected to the login page