# personal-site

To build the project:
    1. npm install
    2. grunt build (be sure to have webpack installed globally - sudo npm install webpack -g)

To deploy the website to the server:
    1. npm run deploy (need to have the private SSH key for this, otherwise you will need to know the password for the
    account 'hunterhod' on the digital ocean server)

Project uses ES6 via babel and the babel webpack loader
Ractive the the javascript framework. TODO: load ractive templates using webpack.

Webpack configuration can be found in Gruntfile.js, since we use grunt-webpack to facilitate bundling in the 'grunt build'
task. This is why there is not a webpack.config.js file.
