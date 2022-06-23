Feature: End to end  Ecommerce validation

    application regression
    @regression
    Scenario: Ecommerce Product Delivery
    Given I open a Ecommerce Page
    When  I add items to cart
    And   Validate the total prices
    Then select the country submit and verify thankyou

    @smoke
    Scenario: Filling the form to shop
    Given I open a Ecommerce Page
    When I fill the form details
    | name | | gender |
    | bobzz| | Male   |
    Then Validate the form behaviour
    And Select the shop page
