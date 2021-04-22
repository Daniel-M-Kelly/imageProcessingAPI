# imageProcessingAPI

#Setup and Architecture
## Set up a project structure that promotes scalability

* Source code is in ./src folder, compiled code is in ./dist folder
* Tests are in ./src/tests
* Separate modules checkCache and imgSharp created for image processing

## Setup an NPM Project

* Package.json contains dependencies and devdependencies
* Scripts: 
    * `npm run test` - script builds and runs jasmine
    * `npm run lint` - script runs eslint with prettier plugin
    * `npm run build` - script compiles typescript files from ./src to js in ./dist
    * `npm run start-dev` - script runs nodemon on src/index.ts file for development
    * `npm run start` - script runs node using ./dist/index.js file

# Functionality

##  Add and use Express to a node.js project
* '/' route returns text to confirm express is running correctly
* '/api/images' route with url query strings for name, width, and height will process the image. Eg. '/api/images?name=fjord.jpg&width=200&height=200'
## Follow middlware documentation to use middleware to create an API
* used multiple custom middleware - validCheck to check for valid filename and query parameters, imgSharp to process image.
* validCheck middleware returns errors if query parameters are missing or the filename is invalid

# Code Quality

## Unit Test w/ Jasmine and Supertest
* Tests for checkCache and imgSharp modules + test for API endpoint

## TypeScript
* All files in .src are typescript, no errors and no usage of 'any' type
* Import and export used for modules
* TS files compile to JS without error

## Well-Formated, linted code
* Prettier and lint run without error.