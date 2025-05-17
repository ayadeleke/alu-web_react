## Create a project using Webpack

Without reusing create-react-app or the code from the previous exercise, start a brand new npm project

Reusing what you learned during the Webpack module:

Set up a system to output a bundle.js file in a dist folder
Set up a dev server with hot reloading
Create a src folder that will contain your Javascript
Set up a simple html file in the dist folder that will import the bundle file in the body tag.
Install and configure the various plugins to support:

inline source map
style loader
css loader
image webpack loader

## Install Babel

Install Babel, and in task_5/dashboard/.babelrc, add the presets for preset-env and preset-react
Add a babel-loader to the Webpack configuration so you can support js and jsx files
Import the files that you wrote in the previous task. All the Javascript and React code should be within the src folder
At this point, running webpack-dev-server should correctly execute your code, and you should be able to see the dashboard like in the last task