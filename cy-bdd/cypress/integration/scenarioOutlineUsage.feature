Feature: Testing Login for different types of users

  Each user should have a different experience

  Background: User should launch the site
    Given I launch the SwagLab site

  Scenario Outline: A <userType> should be able to login to SwagLabs with different <experience>
    And I insert the "<userType>" username
    And I insert the password
    When I click the login button
    Then I should see the "<experience>"

        # First Approach

        # Examples:
        #         | userType | experience            |
        #         | standard | products page         |
        #         | locked   | error message         |
        #         | problem  | multiple images       |
        #         | glitch   | delayed products page |

    Examples:
      | userType    | experience            |
      | standard    | products page         |
      | locked      | error message         |
      | problem     | multiple images       |
      | performance | delayed products page |