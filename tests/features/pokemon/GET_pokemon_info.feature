Feature: Get pokemon info

    As a user,
    I want to check a pokemon info,
    So I can catch'em all

    @pokemon_api
    Scenario: Pokemon info retrieved successfully
    Given I want to retrieve info about "bulbasaur"
    When I make a request to the Pokemon API
    """js
    {
      "url": "https://pokeapi.co/api/v2/pokemon/"
    }
    """
    Then I should retrieve the pokemon info, such as it's "height"