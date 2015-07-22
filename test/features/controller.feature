Feature: Bind controller

  Scenario: Check type inputs
    When I browse to the "/"
    Then The element "inputs.seller" should be type "text"
    Then The element "inputs.name" should be type "text"
    Then The element "inputs.count" should be type "number"

  Scenario: Check bind value
    When I browse to the "/"
    When I enter "user" into "inputs.seller" field
    When I enter "orange" into "inputs.name" field
    When I enter "52" into "inputs.count" field
    Then the id element "welcomeSeller" should contain the text "Good morning user!"
    Then the id element "order" should contain the text "I want to buy one orange times 52"
    Then the css element "h1" should contain the text "I'm orange please buy me!"
