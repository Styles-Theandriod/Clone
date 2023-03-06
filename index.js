module.exports = 42;
// index.js
module.exports = BugfenderCoffeeMachine; 

// In your app
const CoffeeMachine = require('bugfender-coffee-machine');
const coffeeMachine = new CoffeeMachine();
coffeeMachine.prepareCoffee(); 