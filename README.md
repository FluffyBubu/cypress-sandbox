# Welcome to my Cypress Sandbox! 
#### Why did I make this?

Firstly, I'm no Cypress expert! 

However, I have learn't a few things that have helped me throughout my test-automation career. This knowledge has come largly from others that generously shared their time and knowledge <sup>mostly for free!!</sup>. This led me to think, how can I also contribute to my community? What did I struggle with the most? What would have helped me earlier on?

It's hard to give a single answer, - there are quite a few things, but for one, I definitely got tired of a simple login test tutorial with very little real-world context like working with an API, or starting up a local server etc.

## What does this mean Marcus? 
#### (Oh, that's my name by the way ^^)

It means, I've once again brought you a L O G I N test!!! 🥳🥳🥳... But with a twist. 
This repo will provide you with a login test written with different design patterns, strategies, an API test and a server so you can run a Trello clone app (made by Filip Hric) locally on your machine with very little effort and you can try anything without bringing down your company's servers or exposing personal data etc!!

In case you don't see the value of this, I've also provided a README in each branch giving you a little description of each design pattern or strategy and some of the pros and cons I've picked up throughout my career (*spoiler alert: they all have pros and cons). And because I've only made a login test (with a bit extra), that gives you the freedom to build even better tests since the app has way more that you can explore.

Feel free to criticise any of my work or contribute to it (or take). Most of all, I hope this repo sparks your passion for test automation and gives you the the space to try, learn, teach, repeat...

#### Important!
Make sure you know [the basics of Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) so that you can make the most of this repo.

## Follow these steps to get started 
1. Select a branch or branches that interest you
2. Clone or download it
3. Run the Vue app on your local machine using [Filip Hric's](https://filiphric.com) [trello clone app](https://github.com/filiphric/trelloapp) (see his README on how to install and run the app below)
4. Explore and have fun testing!
 
**What is currently covered in this repo**
- [x] Vanilla Cypress
- [x] Vanilla Cypress with custom commands | *helpful resource [Cypress.io](https://docs.cypress.io/api/cypress-api/custom-commands)*
- [x] Cypress with POM (Page Object Model) | *inspired by [Gil Tayar - TestAutomationU](https://testautomationu.applitools.com/cypress-tutorial/)*
- [x] Cypress with BDD (Cucumber pre-processor) *inspired by [Filip Hric](https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide)*
- [x] Cypress with BDD (Gherkin syntax without Cucumber) | *inspired by [Walmyr Filho](https://dev.to/walmyrlimaesilv/using-the-keywords-given-when-then-with-cypress-but-without-cucumber-118p)*
- [x] Cypress with CI/CD (GitHub Actions) | *inspired by [Gleb Bahmutov](https://glebbahmutov.com/blog/gh-reusable-workflows/)*
- [x] Cypress with Parallel testing | *inspired by [Gleb Bahmutov](https://glebbahmutov.com/blog/cypress-parallel-free/)*
- [x] Cypress with API testing | *helpful resource [Filip Hric](https://filiphric.com/cypress-basics-api-testing)*

> #### Filip Hric's README for his trello clone app
> 
> a simple trello clone application built on vue and json-server. The point of this app is to be super easy to install and run, so that you don’t need to set up complicated database and have several scripts running in order to open app. Just install, write npm start and you are good to go.
> 
> The original version of this app was built by Zack Thoutt and [you can find it here](https://github.com/zackthoutt/vue-trello). I updated the app to vue 2 and am using json-server and axios instead of local storage to handle data. I also implemented a simple JWT authentication by utilizing json-server-auth. You can also upload images to tasks, files are saved to your drive. 
> 
> I’m pretty happy with the result, although I have to say, that I am no Vue expert. I learn by copying the work of others, code from stackoverflow, documentation(s) and then try to use that knowledge and code to make something on my own. I bet you could find some antipatterns in the code and you are more than welcome to create an issue with a suggestion. I made this app for a workshop I’m am doing on testing in Cypress.io. If you are intereseted how that looks, check out my [quick course on Udemy](https://www.udemy.com/course/cypress-test-automation-for-people-in-a-hurry/?couponCode=D7F5FD6D19C9A5FF823D) (link with a discount coupon, cause you’re nice), although I’m using another app there. Maybe next time.
> 
> Oh and the installation
`npm install`
`npm start`
> 
> That should do it. If you update the code, use `npx grunt dev` to build the app again.
> 
> I’ll do a better readme file, I swear. I’m just a little busy now.

### Keep in touch
Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/marcus-harvey-89b29710a/)