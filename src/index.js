import "./styles.css";
/***************Let and const in ES5 and ES6 begin***************/
class FirstClass {
  constructor() {
    this.name = "ES6";
  }
  sayHello() {
    const times = 3;
    const hiWord = "Hey ";
    let hiPhrase = "";
    for (let i = 0; i < times; i++) {
      hiPhrase += hiWord;
    }
    return hiPhrase + ", I'm going to learn " + this.name;
    /* We will use const before varibale when the value 
    will not getchnaged till the scope of the varibale finished 
    else we will use let keyword.*/
  }
}
var instance = new FirstClass();
document.getElementById("app").innerHTML = instance.sayHello();
/***************Let and const in ES5 and ES6 end***************/
