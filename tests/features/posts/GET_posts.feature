Feature: GET Posts API

    The server must be able to return post information.

    Rule: it must be possible to retrieve all posts

        Example: retrieving all posts
            When I request all posts
            Then the response status code must be 200
            And the response body must conform with the "GET_all_posts" contract
