@exitCriteria

Feature: Login and Logout

  Scenario: the user Logs In
    checks Account Details
    after that he Logs Out

    #Conection to url is made
    Given the user accesses "TD@url" page
      #Step 1: the user clicks on Sign In
      #Expected: the user is redirected to login page
    When the user click "Sign In" element on navigation menu page
    Then the user is redirected to "Login" page

      #Step 2: the user enters username and password and clicks login
      #Expectd: the user is logged in and redirected to main page
    When the user enters username "TD@user" and password "TD@password" and clicks "Login" on login page
    Then the user is redirected to "Main" page and welcome message with "TD@name" name appears on main page

      #Step 3: the user checks Account Details
      #Expected: 2 accounts are visible under Account Details
    When the user checks "Account Details" list on main page
    Then the feature contains "2" entries on main page

      #Step 4: the user clicks on Sign Off
      #Expected: the user is redirected to login page
    When the user click "Sign Off" element on navigation menu page
    Then the user is redirected to "Index" page


