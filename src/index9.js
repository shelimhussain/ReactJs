import "./styles.css";
import BaseClass, { allhiWords } from "./utiles";
/***************Modules (export/import)***************/
class FirstClass extends BaseClass {
  constructor() {
    super(); /*to access properties of BaseClass*/
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
    /*allhiWords varibale imported from utiles.js*/
    let hiWords = allhiWords
      .filter((x) => x.indexOf("He") === 0)
      .map((x) => x.replace(" ", "o"));

    let hiPhrase = "";

    for (let hiWord of hiWords) {
      hiPhrase += hiWord;
    }

    /* Arrow function*/
    let great = () => {
      return `${hiPhrase} , 
      I'm going to learn ${this.name} 
      by our teacher ${this.teacherName}`;
    };

    /* Here ${this.teacherName} is the property of BaseClass*/

    return great();
  }
}
var instance = new FirstClass();

instance.name = "PHP"; /*Using setter method*/

document.getElementById("app").innerHTML = instance.sayHelloEs6();
/***************Modules***************/
