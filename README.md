# Cypress with POM (Page Object Model)

#### MODEL/DESIGN
Cypress design with Page Object Model (POM)

#### STRENGTH: 
- POM is a design pattern that can be used to make tests have a more readable flow.
- POM is known for making code reusable. 
- You also have the benefit of code-completion (IntelliSense) in your IDE.
- Finally, POM will work with pretty much any test framework using the same language, so there's no need to rewrite your test structure.

#### CHALLENGE: 
- POM can have some major drawbacks if designed badly (functions named incorrectly, assertions not related to function, deceiving error messsages etc.) - ironically, making it more difficult to maintain since you need to jump between files to understand how to use the code or to debug.
- Debugging can be tricky since the added layer of abstraction means the error messages might not be as clear as when using a more vanilla Cypress design which may result in you needing to write your own error messages and abandon Cypress' great feedback that's provided by default.
- POM definitely still has its place, but it's important to understand when to use it - it can be tempting to try and make everything "readable" and deceive yourself and your team in the process. To avoid this, you need to ensure your functions don't do too much so that they stay as close to their purpose as possible for the sake of anyone else who may need to use the code, or when you come back to it later and have forgotten how that batch of code works.

#### BONUS THOUGHTS:
- Consider how I've setup my POM. Yes, you may be able to read the names of the functions, but when you check the code within those functions, do they do what you understood it to do?
- Try break my test, do the error messages relate to the function name? Could they be better?
- Your error messages should give yourself and the other devs enough information to point in the right direction without needing to debug your code, so make sure your assertions make sense in the context of the function, but mostly, the purpose of the test.

#### Helpful resource:
[Gil Tayar - TestAutomationU](https://testautomationu.applitools.com/cypress-tutorial/)