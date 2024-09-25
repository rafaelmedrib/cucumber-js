@API @UserRegistration
Feature: User Registration API

    - The server must be capable of registering new users.

    @UserRegistration_R01
    Rule: it must be possible to create a new user

        Example: creating a new user
            Given a new user with the following data
            """json
            {
                "name": "John Doe",
                "email": "johndoe@fakemail.not"
            }
            """
            When the new user register in the platform
            Then the response status code must be 201
            And the response body must conform with the "POST_user" contract