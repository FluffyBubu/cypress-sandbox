# Cypress with API Testing

#### MODEL/DESIGN
Cypress design with API and UI actions where the API is used to setup data and perform actions and the UI is only used to assert that the end-user experiences the impact of the actions.

#### STRENGTH: 
- This design can be used to speed up your tests drastically by using API calls to perform actions 
that would otherwise take a long time to perform via the UI.
- The API can also be used to create test data to make your tests more robust and predictable.
- Interacting with these API's isn't only helpful for quicker tests, but you're gaining the benefit of ensuring that API works as intended as well.

#### CHALLENGE: 
- You need to be sure that you understand how to use your API and have placed assertions 
that help to avoid false positives (flaky tests).
- Using the API bypasses the UI meaning it isn't a true reflection of how the end-user will interact with our software, with that being said, there's no need to have the same UI test multiple times, so if you've covered a test case using the UI before, you can use the API in all other tests to perform those same tasks much quicker.

#### BONUS THOUGHTS:
If you consider the AAA (Arrange, Act, Assert) pattern, You can use the API and UI in any combination of steps using this pattern. 

Lets consider our current test:
```
Arrange - API is used to clean the Db and create a new user so that we can have a valid user to authenticate
Act - API is used to authenticate (i.e. login) and store token/cookie & UI is used to navigate to homepage (`cy.visit('/')`)
Assert - UI is used to confirm that the user is logged
```

Hypothetical: we could have used a different combination depending on what we're testing.
```
Arrange - UI is used visit login page (`cy.visit('/login')`)
Act - UI is used to perform login action
Assert - API is used to confirm that authentication was succesful and cookie was stored
```

And we can keep going on. The point is, if you're already written tests that cover certain cases, then a well-thoughtout pattern combination may allow you to run tests a quicker by skipping the UI, or it might simply be a case of wanting to assert something that only the API has immediate access to without needing to navigate to a separate page to confirm.

#### Helpful resource:
[Filip Hric - Basics API Testing](https://filiphric.com/cypress-basics-api-testing)