
Feature: Search on site webdriver.io
  Scenario Outline: As a user, I can click on search and type text

    Given I am on webdriverio page
    When I click on search
    Then I type text to search