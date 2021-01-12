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
    /* We will use const keyword before varibale when the value 
    will not getchnaged till the end of the scope of the varibale 
    else we will use let keyword. Here in above example, 
    the value for hiPhrase and i is getting changed with the loop*/
  }
}
var instance = new FirstClass();
document.getElementById("app").innerHTML = instance.sayHello();
/***************Let and const in ES5 and ES6 end***************/
