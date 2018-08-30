# Unit Testing I

## Overview

- Different ways of testing your code
  - Unit Testing
    - testing very small pieces of your code, usually one function
  - Integration testing
    - Can piece A talk to piece B?
  - functionality testing
    - Do the pieces working together play nice?
  - E2E testing
    - testing the site like the user would.
  - stress testing
    - but what happens when 10,000 users log on at once?
  - regressions testing
    - when I made that change did other random things happen

- That is not a comprehensive list but it gives a good sense of the different types of testing
- We will focus on unit testing today but tomorrow we will be going over an example of integration testing and E2E testing
- There are a few different approaches to testing methodologies.
  - BDD is closer to what students do naturally and they have an idea of what it should do and then they make it happen.
  - There is TDD or test driven development and it focuses on writing your test codes first then making the functionality to match second

## Unit testing

- we test one thing at a time.
  - if you say and, its too big
- each test should not need outside info and is responsible for its own set up and tear down.
- tests should be simple.
- if your code fails you should know exactly what about it failed.

- We will be using Jest as our test runner and assertion library
  - An assertion library is basically the way to say the code should function this way.
  - a test runner is a way to execute it and keep it organized and often give visual feedback.

## Putting it into practice

- To start have the students make a folder called anything but jest.
  - in the folder run npm init.
  - install jest
  - inside the package.json replace the script for test so it looks like this `"test": "jest"`
- Make a file called `logic.js` and `logic.test.js`

## Basic Math

- We are going to do some TDD unit testing to showcase some jest
- first we are going to make a test that checks that 2 + 2 equals 4
  - run jest to show what the jest tests would look like.
  - then make an object in the logic file and give it an Add method.
    - export the object and import it into the test file
    - test that the function invoked passed in two numbers returns the right number
      - write the add method but have it just return the correct answer, no math required.
      - then do a triangulation and force the method to need to do correct math
    - show them `toBeCloseTo` with `0.1 + 0.2`
    - show how error handling can be done.

## Working with Objects

- We want to make a function that given an object can update the quantity by one.
  - given an object update the quantity by one.
  - test that it returns an object with all the right properties.
  - test that it doesn't modify the same object (due to reference issues)
  - also show them before each to set the original object back to starting.

## Working with async calls.

- can get a 200 from the server.
- can get data from the server.

## Others
 - Show them the other expects.
 - https://jestjs.io/docs/en/using-matchers.html