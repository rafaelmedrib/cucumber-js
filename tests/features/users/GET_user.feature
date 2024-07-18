Feature: GET User API

    The server must be capable of returning user information.

    Rule: it must be possible to retrieve user information by its ID

        Example: retrieving user with ID 1
            When I request the user with ID 1
            Then the response status code must be 200
            And the response body must conform with the "GET_user_by_id" contract
    
    Rule: it must be possible to retrieve all users

        Example: retrieving all users
            When I request all users
            Then the response status code must be 200
            And the response body must conform with the "GET_all_users" contract

    Rule: must return an empty object when no user is found

        Example: retrieving user with ID 999
            When I request the user with ID 999
            Then the response status code must be 404
            And the response body must conform with the "GET_non_existing_user" contract