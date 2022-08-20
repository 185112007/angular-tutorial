Feature: Testing Login for a Locked out user

  A locked out user should have a glitch free login experience

  Scenario: A lockout user should be able to login to the site
    Given I launch the SwagLab site
    And I insert the locked out username
    And I insert the password
    When I click the login button
    Then I should see error message