Feature: Testing Login for a Standard user

    A standard user should have a glitch free login experience

    Scenario: A standard user should be able to login to SwagLabs
        Given I launch the SwagLab site
        When I insert the standard username
        And I insert the password
        And I click the login button
        Then I should see the products page