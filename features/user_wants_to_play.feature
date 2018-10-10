Feature: User wants to play
    As a user
    When I pick an option
    I would like to have a response from an opponent

    Background: User is on the site
        Given I visit the site 

    Scenario: User picks rock
        When I click "Rock"
        Then I should see "Paper."
        And I should see "You win!"
