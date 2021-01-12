import "./styles.css";
/***************Arrow functions***************/
class FirstClass {
  constructor() {
    this._name = "ES6";
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

    for (let hiWord of hiWords) {
      hiPhrase += hiWord;
    }

    /* Arrow function*/
    let great = () => {
      return `${hiPhrase} , 
      I'm going to learn ${this.name}`;
    };

    return great();
  }
}
var instance = new FirstClass();

instance.name = "PHP"; /*Using setter method*/

document.getElementById("app").innerHTML = instance.sayHelloEs6();
/***************Arrow functions***************/
