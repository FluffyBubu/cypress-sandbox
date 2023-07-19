# Cypress with CI/CD (GitHub Actions)

#### MODEL/DESIGN
Cypress design with CI/CD

#### STRENGTH: 
- The ability to provide quick feedback to the team (i.e. everyone benefits from yours tests).
- Being able to run scheduled tests without anyone needing to trigger them.
- Being able to run tests outside of your local environment, meaning you can do better things with your life than staring at your tests (except if you were making :coffee:, nothing is more important)

#### CHALLENGE: 
- Frequent flaky tests can detract from the value of having your tests on the CI/CD.
- You might need to earn the trust of whoever is in charge of your pipeline because they'll need to invest time in helping you set things up in certain cases like for secrets or environmental variables etc.
- The setup is super difficult... WRONG, you just haven't read [Gleb Bahmutov's](https://glebbahmutov.com/blog/run-and-trigger-github-workflow/) blog on running Cypress testing using Github Actions ^^.

#### BONUS THOUGHTS:
- A strategy needs to be in place in order for your team to properly benefit from your tests being part of the CI/CD. Part of this strategy is determining which test suites (i.e. regression or sanity etc.) should run depending on the situation. 
- Regression tests can take quite long, especially for large projects, so that won't be ideal to run for every code push or pull-request. However, regression tests could be scheduled to run in quieter times.
- Sanity or feature-specific tests may be more suitable for push or pull-requests since they'll be significantly shorter.

#### Helpful resource:
- [Gleb Bahmutov - Run and Trigger Github Workflow](https://glebbahmutov.com/blog/run-and-trigger-github-workflow/)