Feature: Checkout
Feature description: As a user, I want to complete the checkout process in Saucedemo so that I can purchase items from the store.

  Background:
    Given A browser is launched

  Scenario: Successful checkout with valid information
    When User login to Saucedemo as standard user
    And User add item to cart
    Then User should be able to checkout item, then logout

  