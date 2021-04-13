Feature: Home Page
  Scenario: the user goes to main page
    checks that page is loaded correctly

    #Connection to url is made
    Given the user accesses "TD@url" page

    #Step 1: The user click on logo from upper left
    #Expected: the user should be redirected to index page
    When the user click "Logo" element on navigation menu page
    Then the user is redirected to "Index" page

    #Step 2: The user checks side menu from the left page
    #Expected: There should be displayed 3 big options
    When the user checks "Side" menu elements on side menu
    Then there should be displayed "3" options on side menu

    #Step 3: The user checks side sub menu from the left page
    #Expected: There should be displayed 19 sub options
    When the user checks "SubSide" menu elements on side menu
    Then there should be displayed "19" options on side menu



