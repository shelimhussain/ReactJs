import "./styles.css";
/***************New Array methods***************/
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
    let hiWords = ["Hey ", "Hi ", "Hello "];
    /*Using Array Methods*/
    hiWords = hiWords
      .filter((x) => x.indexOf("He") === 0)
      .map((x) => x.replace(" ", "o"));

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
/***************New Array methods***************/
