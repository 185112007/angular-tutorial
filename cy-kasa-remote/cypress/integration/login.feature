Feature: Testing Login for a admin user

    An admin user should be able to login the system

    Scenario: An admin user should be able to login to Kasa web site
        Given I launch the Kasa app
        And I insert the password
        When I click the login button
        Then I should see the main page with specific title