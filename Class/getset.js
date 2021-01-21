class CoffeeMachine {
    constructor(WaterAmount) {
        this._waterAmount = WaterAmount;
    }
  
    set WaterAmount(value) {
      if (value < 0) value = 0;
      console.log('set triggered!')
      this._waterAmount = value;
    }
  
    get WaterAmount() {
      console.log('get triggered!')

      return this._waterAmount;
    }
}
  
let WaterA = new CoffeeMachine(10);
console.log(WaterA.WaterAmount);

WaterA.WaterAmount = -20;
console.log(WaterA.WaterAmount);
