Feature: Testing Login for a Performance glitch user

  A performance user should have a glitch free login experience

  Scenario: A performance user should be able to login to the site
    Given I launch the SwagLab site
    And I insert the standard username
    And I insert the password
    When I click the login button
    Then I should see the products page