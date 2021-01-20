class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // Error: Negative water


  class CoffeeMachines {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachines = new CoffeeMachines(100);
  
  console.log(`Power is: ${coffeeMachines.power}W`); // Power is: 100W
  
  coffeeMachines.power = 25; // Error (no setter)