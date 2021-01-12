import "./styles.css";
/***************Template Strings***************/
class FirstClass {
  constructor() {
    this.name = "ES6";
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
    /*Note: Template Strings can be multi-lined*/
  }
}
var instance = new FirstClass();
document.getElementById("app").innerHTML = instance.sayHelloEs6();
/***************Template Strings***************/
