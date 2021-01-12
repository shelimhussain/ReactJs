/*Let and const in ES5 and ES6 begin*/

/*Let and const in ES5 and ES6 end*/

/*Classes in ES5 and ES6 begin*/

import "./styles.css";

var Es5class = function () {
  this.name = "ES5";

  this.sayes5Hello = function () {
    return "Hi, I'm Learning " + this.name;
  };
};

var instanceEs5 = new Es5class();

class FirstClass {
  constructor() {
    this.name = "ES6";
  }

  sayHello() {
    return "Hi, I'm going to learn " + this.name;
  }
}

var instance = new FirstClass();

document.getElementById("app").innerHTML =
  instanceEs5.sayes5Hello() + "<br><br>" + instance.sayHello();

/*Classes in ES5 and ES6 ends*/
