## Create basic tests with four tests

in task_3/dashboard/src/utils.test.js:

Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
Write a test to check that getFooterCopy returns the correct string when the argument is true or false
Write a test checking the returned string for getLatestNotification

## Install Enzyme

Install Enzyme with npm
Create a file named setupTests.js and configure the adapter for Enzyme

# Note: Enzyme is not needed for React 19

## Create React tests
mandatory
in task_3/dashboard/src/App.test.js create four tests:

test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer
in task_3/dashboard/src/Notifications.test.js create three tests

test that Notifications renders without crashing
verify that Notifications renders three list items
verify that Notifications renders the text Here is the list of notifications
Requirements:

When running the test suites, you should see the following result
You must use shallow rendering to write the React tests