# Assignment 2 - Automated development process.

Name: Calam Carroll

Student No. 20067732

## Overview.
Sculpture Fitness is a web application that allows a user full CRUD functionality for Programs and Diets. It was build using node angular and express and has a Mongodb backend data storage.

## Environment.
 In order to run this project you must run the Package.json file by means of NPM install. You must also run your Mongodb server.


## Build automation.

To build the application for production you must run the command NPM run build.
To run all acceptance tests you must run the command mocha test/acceptance/ from the projects main folder

## Acceptance Testing.

There are 22 acceptance tests for sculpture fitness. These tests are for the programs, diets and register page with three tests for the home page

##The results of the tests are as follows

![](./img/media/Test 1.jpg)
![](./img/media/Test 2.jpg)

##Screen shots of the individual pages

![](./img/media/1.jpg)
![](./img/media/2.jpg)
![](./img/media/3.jpg)
![](./img/media/4.jpg)
![](./img/media/5.jpg)
![](./img/media/6.jpg)
![](./img/media/7.jpg)

##The path for the test files are

test/acceptance/add-diets-test.js
test/acceptance/add-programs-test.js
test/acceptance/diets-test.js
test/acceptance/findGymTest.js
test/acceptance/home-Page-test.js
test/acceptance/programs-test.js
test/acceptance/register-test.js
test/acceptance/update-diets-test.js
test/acceptance/update-program-test.js




## Continuous Integration.

Link to travis account https://travis-ci.org/calamcarroll/SculptureFitness_with_Travis


