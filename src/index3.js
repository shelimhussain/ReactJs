import "./styles.css";
/***************for of loop***************/
class FirstClass {
  constructor() {
    this.name = "ES6";
  }
  sayHello() {
    const hiWords = ["Hey ", "Hi ", "Hello "];
    let hiPhrase = "";
    for (let i = 0; i < hiWords.length; i++) {
      const hiWord = hiWords[i];
      hiPhrase += hiWord;
    }
    return hiPhrase + ", I'm going to learn " + this.name;
  }
  sayHelloEs6() {
    const hiWords = ["Hey ", "Hi ", "Hello "];
    let hiPhrase = "";
    /*ES6 style of defining for of loop*/
    for (let hiWord of hiWords) {
      hiPhrase += hiWord;
    }
    return hiPhrase + ", I'm going to learn " + this.name;
  }
}
var instance = new FirstClass();
document.getElementById("app").innerHTML =
  instance.sayHello() + "<br><br>" + instance.sayHelloEs6();
/***************for of loop***************/
