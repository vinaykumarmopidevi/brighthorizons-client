@regression
Feature: Find a Child Care Center  
  Validate child care center details.

  Scenario: View child center address on the map  
    Given user clicks on the "Find a Center" option  
    And user confirms the "child-care-locator" as a part of its URL   
    And user selects the "New York" location  
    And user verifies the search results count  
    When user clicks on the first child care center  
    Then user compares the address with the map view  
