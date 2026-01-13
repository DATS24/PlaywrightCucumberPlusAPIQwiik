Feature: Sort
Feature description: As a user, I want to sort items in Saucedemo so that I can view products based on my preferences.

  Background:
    Given A browser is launched

  Scenario: Sort items by price from low to high
    When User login to Saucedemo as standard user
    And User sort item by Price Low to High
    Then User should be able to see items sorted by Price Low to High