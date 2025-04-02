@regression
Feature: Find a Child Care Center  
  Validate child care center details.

  Scenario: Search with a resource
    Given user clicks on the search icon  
    And user confirms that the search field appears  
    When user searches for the "Employee Education in 2018: Strategies to Watch" text  
    Then user verifies that the first resource "Employee Education in 2018: Strategies to Watch" in the search results is correct  

  Scenario: View child center address on the map  
    Given user clicks on the find a center icon  
    And user confirms the "child-care-locator" as a part of its URL   
    And user selects the "New York" location  
    And user verifies the search results count  
    When user clicks on the first child care center  
    Then user compares the address with the map view  
