#### Articles used to create this template
[Ken Slachta](https://www.thisdot.co/blog/using-cypress-with-cucumber-in-a-react-application/)
[Filip Hric](https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide)

# Welcome to my Cypress Sandbox!
This repo is simply designed to showcase different ways that you can model or design your Cypress tests.
My dream is that it will ultimately be a place where you can contribute to this list as well to give other fellow testers ideas.
Everything I've added is based and/or inspired by what I've learn't from others fellow testers - so why not also contribute to the knowledge pool.

## Who should use this?
Anyone curious on other ways to design your tests.
I've designed this repo so that you can examine the code, use parts to experiment on your own, or just take everything! 
The idea is to expand our Cypress thinking together.

## Who should not use this?
Those who think this is a "How to use Cypress" tutorial.
You only need a very basic understanding of Cypress to benefit from this repo, but you will need to know how to at least [install and run Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) before attempting to delve into design.

## What is currently covered by this repo
- Vanilla Cypress | *Strength: quick and easy to get going; Challenge: not always readable*
- Vanilla Cypress with custom commands | *Strength: easier to read and maintain; Challenge: slightly more complexity *

## What's still to come
- Cypress with POM (Page Object Model) | *Strength: code more readable and better reusability; Challenge: added abstraction layer can make debugging more difficult*
- Cypress with BDD (Cucumber pre-processor) | *Strength: tests are scenario based and written in natural language that anyone can understand; Challenge: tests are less flexible and maintenance can take a lot of time*
- Cypress with BDD (Gherkin syntax without Cucumber) | *Strength: keep the simplicity of scenario-based tests with better maintenance; Challenge: tests are less flexible since it's still BDD*
- Cypress with TypeScript | *Strength: improved safety while coding and assists with documentation for custom commands etc.; Challenge: a bit of a learning curve before seeing real benefits*
- Cypress with API testing | *Strength: gives you power to access the backend to perform actions without using the UI; Challenge: depending on your project, API documentation might not be readily available*
- Cypress with CI/CD | *Strength: the ability to provide quick feedback to the team and the ability to run tests outside of your local environment; Challenge: you haven't read [Gleb Bahmutov's](https://glebbahmutov.com/blog/run-and-trigger-github-workflow/) blog on running Cypress testing using Github Actions ^^*
- Cypress with Parallel testing | *Strength the same perks as CI/CD but with running your tests with multiple machines!; Challenge: you also haven't read [Gleb Bahmutov's](https://glebbahmutov.com/blog/cypress-parallel-free/) blog on running Cypress tests in Parallel for free ^^*


## How do you get started?
1. Select the branch that interests you.
2. Clone or download however many of them you want.
3. Run the Vue application on your local machine using [Filip Hric's](https://filiphric.com) [trello clone app](https://github.com/filiphric/trelloapp) (see his README on how to install and run the app below)
4. Explore and have fun testing

### Keep in touch
Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/marcus-harvey-89b29710a/)

## Filip Hric's README for his trello clone app

a simple trello clone application built on vue and json-server. The point of this app is to be super easy to install and run, so that you don’t need to set up complicated database and have several scripts running in order to open app. Just install, write npm start and you are good to go.

The original version of this app was built by Zack Thoutt and [you can find it here](https://github.com/zackthoutt/vue-trello). I updated the app to vue 2 and am using json-server and axios instead of local storage to handle data. I also implemented a simple JWT authentication by utilizing json-server-auth. You can also upload images to tasks, files are saved to your drive. 

I’m pretty happy with the result, although I have to say, that I am no Vue expert. I learn by copying the work of others, code from stackoverflow, documentation(s) and then try to use that knowledge and code to make something on my own. I bet you could find some antipatterns in the code and you are more than welcome to create an issue with a suggestion. I made this app for a workshop I’m am doing on testing in Cypress.io. If you are intereseted how that looks, check out my [quick course on Udemy](https://www.udemy.com/course/cypress-test-automation-for-people-in-a-hurry/?couponCode=D7F5FD6D19C9A5FF823D) (link with a discount coupon, cause you’re nice), although I’m using another app there. Maybe next time.

Oh and the installation
`npm install`
`npm start`

That should do it. If you update the code, use `npx grunt dev` to build the app again.

I’ll do a better readme file, I swear. I’m just a little busy now.