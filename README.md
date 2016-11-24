# personal-site

To build the project:
    1. npm install
    2. grunt build (be sure to have webpack installed globally - sudo npm install webpack -g)

Project uses ES6 via babel and the babel webpack loader
Ractive the the javascript framework. TODO: load ractive templates using webpack.

Webpack configuration can be found in Gruntfile.js, since we use grunt-webpack to facilitate bundling in the 'grunt build'
task. This is why there is not a webpack.config.js file.
