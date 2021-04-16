# imageProcessingAPI

#Setup and Architecture

## Set up a project structure that promotes scalability

* Source code is in ./src folder, compiled code is in ./dist folder
* Tests are in ./src/tests

## Setup an NPM Project

* Package.json contains dependencies and devdependencies
* Scripts: 
    * `npm run test` - script builds and runs jasmine
    * `npm run lint` - script runs eslint with prettier plugin
    * `npm run build` - script compiles typescript files from ./src to js in ./dist
    * `npm run start-dev` - script runs nodemon on src/index.ts file for development
    * `npm run start` - script runs node using ./dist/index.js file

# Functionality

## 