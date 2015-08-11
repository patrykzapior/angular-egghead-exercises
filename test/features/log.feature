Feature: ng-repeat and $index, $event, $log

  Scenario: Initial state
    When I browse to the "/"
    Then I should see "list"
    Then I should see "listWithIndex"
#    Then I should see "something" text in "buttons"
    Then "1" button should have "btn-default" class
    Then "2" button should have "btn-default" class
    Then "3" button should have "btn-info" class
    Then "4" button should have "btn-default" class
    Then "5" button should have "btn-default" class
    Then "6" button should have "btn-default" class
    Then "7" button should have "btn-info" class
    Then "8" button should have "btn-default" class
    Then "9" button should have "btn-default" class

  Scenario: Log alert message when button clicked
    When I browse to the "/"
    When I click "1" button
    Then I should see "alertMessage"
    When I click "2" button
    Then I should see "alertMessage"
    When I click "4" button
    Then I should see "alertMessage"
    When I click "5" button
    Then I should see "alertMessage"
    When I click "6" button
    Then I should see "alertMessage"
    When I click "8" button
    Then I should see "alertMessage"
    When I click "9" button
    Then I should see "alertMessage"

  Scenario: Direct to checkLog page when button clicked
    When I browse to the "/"
    Then I should see "list"
    Then I should see "listWithIndex"
    When I click "3" button
    Then I should not see "alertMessage"
    Then I should be directed to "/check"
    When I click "backButton"
    When I click "7" button
    Then I should not see "alertMessage"
    Then I should be directed to "/check"


