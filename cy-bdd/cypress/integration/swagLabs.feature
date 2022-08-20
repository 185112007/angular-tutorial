Feature: Testing Login for different types of users

  Each user should have a different experience

  Background: User should launch the site
    Given I launch the SwagLab site

  Scenario: A standard user should be able to login to SwagLabs
    And I insert the "standard" username
    And I insert the password
    When I click the login button
    Then I should see the products page

  Scenario: A problem user should be able to login to SwagLabs
    And I insert the "problem" username
    And I insert the password
    When I click the login button
    Then I should see the same products images

  Scenario: A lockout user should be able to login to the site
    And I insert the "locked" username
    And I insert the password
    When I click the login button
    Then I should see error message

  Scenario: A performance user should be able to login to the site
    And I insert the "performance" username
    And I insert the password
    When I click the login button
    Then I should see the products page