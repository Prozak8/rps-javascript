Feature: User sees rps game
    As a user
    In order to have fun
    I would like to be able to play a game of RPS


    Scenario: User visits the site
        Given I visit the site
        Then I should see "Choose your weapon"
        And I should see "Rock"
        And I should see "Paper"
        And I should see "Scissors"