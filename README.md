# SDET Exercise

## Overview
https://github.com/landot/take-home-exercise

This repository contains browser-based tests using Typescript + TestCafe. These tests leverage the GitHub search API to perform a search on the term "create-react-app" and performs assertions based on the response.

## Prerequisites

Make sure you have the following installed:
- nvm (you can check if it is installed by running `nvm --version`)

## Installation

Clone the repository to your local machine:
```bash
git clone https://github.com/landot/take-home-exercise.git
```
Move to the repo's directory:
```bash
cd take-home-exercise
```

Set Node version to lts/iron:
```bash
nvm install 
nvm use
```

Install node modules: (Note: you may see a message about [3 high severity vulnerabilities](https://github.com/DevExpress/testcafe/issues/8140))
```bash
npm install
```

## To run tests:
- Chrome (Desktop):

    `npm run test`
    
    or
    
    `npm run test:chrome`
- Chrome (Headless Desktop):
    
    `npm run test:chrome:headless`
- Chrome (Mobile):
    
    `npm run test:chrome:mobile`
- Chrome (Headless Mobile):
    
    `npm run test:chrome:mobile:headless`


## Extra Notes:

- A HTML test report is saved to the `/artifacts/test-results.html` file for the most recent test run

- Test failure screenshots are added to the `screenshots/` folder

- A precommit hook is set up that requires:
    - tests to pass
    - code to pass linting rules
    - commit messages to follow [conventional commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/)