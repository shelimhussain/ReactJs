import "./styles.css";
/***************Getters and Setters***************/
class FirstClass {
  constructor() {
    this._name = "ES6";
    /*Use _ to name private properties or methods*/
  }

  /*Getter method*/
  get name() {
    return `tech ${this._name}`;
  }

  /*Setter Method*/
  set name(value) {
    this._name = value;
  }

  sayHelloEs6() {
    const hiWords = ["Hey ", "Hi ", "Hello "];
    let hiPhrase = "";
    /*ES6 style of defining for of loop*/
    for (let hiWord of hiWords) {
      hiPhrase += hiWord;
    }
    return `${hiPhrase} , 
    I'm going to learn ${this.name}`;
    /*Now ${this.name} will use the getter method name()*/
  }
}
var instance = new FirstClass();

instance.name = "PHP"; /*Using setter method*/

document.getElementById("app").innerHTML = instance.sayHelloEs6();
/***************Getters and Setters***************/
