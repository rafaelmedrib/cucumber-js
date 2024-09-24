Feature: Query Users API

    - The server must be capable of returning user information by its ID.
    - The server must be capable of returning all users.
    - The server must return an empty object when no user is found.

    Rule: it must be possible to retrieve user information by its ID

        Example: user with ID 1 is retrieved
            When the client request the user with ID 1
            Then the response status code must be 200
            And the response body must conform with the "GET_user_by_id" contract
    
    Rule: it must be possible to retrieve all users

        Example: all users are retrieved
            When the client request all users
            Then the response status code must be 200
            And the response body must conform with the "GET_all_users" contract

    Rule: must return an empty object when no user is found

        Example: an empty object is returned for an unexisting user
            When the client request the user with ID 999
            Then the response status code must be 404
            And the response body must conform with the "GET_non_existing_user" contract