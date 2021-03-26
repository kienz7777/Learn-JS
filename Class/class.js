class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
// Usage:
let user = new User("John");
user.sayHi(); //John

user.name = "kie"
user.sayHi(); //kie         // No Encapsulation