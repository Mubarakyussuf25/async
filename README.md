# Exercise FP-2 Callbacks & Promises

## Boilerplate
after you have cloned me, cd into the folder, and in a VS Code terminal type type:

`npm install`

Whenever you pull a repository that contains a file called package.json, you will ALWAYS have to run npm install.

Run the code in `main.js`:

`node main.js`

and try to understand it.

Some `console.logs` may help ;)

## The Task

### Scenario

You need to find the name of a user's favourite food but all you have to go on is the user's name, so you'll need to:

- Query the db by a user's name to find their favourite food `uid`
- Query the db by this `uid` to find its `name`

### Requirements

### Part 1

- Refactor the query functions to use promises, don't use `async/await`
- The solution also shows `findFavouriteFood` as a promise as well
- Avoid nesting callbacks, instead use composition.

### Part 2

- Refactor the query functions to `reject` when missing the required input variables
- Catch these rejected promises and demonstrate they work, i.e. add some lines passing in bad values that do not exist in the data

### Part 3 (Stretch)

- Find the favourite food for all users concurrently

### Part 4 (Bonus)

- Refactor `findFavouriteFood` to use `async/await`

**Be sure to ask your instructor for feedback as you complete each step**
