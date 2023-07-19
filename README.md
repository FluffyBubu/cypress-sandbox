# Cypress with Parallel Testing (GitHub Actions)

#### MODEL/DESIGN
Cypress design with parallel testing

#### STRENGTH: 
- Same strengths as mentioned in the [CI/CD branch](https://github.com/FluffyBubu/cypress-sandbox/blob/ci/cd/README.md). 
- Running your tests in parallel on multiple machines which can result in quicker test run times.

#### CHALLENGE: 
- Same challenges as mentioned in the [CI/CD branch](https://github.com/FluffyBubu/cypress-sandbox/blob/ci/cd/README.md).
- The setup is super difficult... WRONG, you just haven't read [Gleb Bahmutov's](https://glebbahmutov.com/blog/cypress-parallel-free/) blog on running Cypress tests in Parallel for free ^^.

#### BONUS THOUGHTS:
- Sometimes more machines aren't always beneficial because they all still need to install dependancies etc. Make sure you do some trial runs beforehand to optimise the process.

#### Helpful resource:
- [Gleb Bahmutov - Run Cypress Specs in Parallel for Free](https://glebbahmutov.com/blog/cypress-parallel-free/)
