Feature: GET Posts API

    - The server must be able to list all posts.
    - The server must be able to list a post by its ID.

    Rule: it must be possible to retrieve all posts

        Example: all posts are retrieved
            When I request all posts
            Then the response status code must be 200
            And the response body must conform with the "GET_all_posts" contract
