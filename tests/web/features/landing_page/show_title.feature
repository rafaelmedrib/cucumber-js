@WEB @PageTitle
Feature: Show title

    - The title must be displayed at the top of the page.

    @PageTitle_R01
    Rule: the title must be displayed at the top of the page

        Example: the title is displayed
            Given the user is on the landing page
            Then the title must be "Playwright"