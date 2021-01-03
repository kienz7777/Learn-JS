function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
let john = new User("John");
console.log(john.name);
john.sayHi(); // My name is: John