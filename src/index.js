import "./styles.css";
/***************Spread Operator***************/
const user = {
  firstname: "Shelim",
  lastname: "Hussain"
};

/* 3 dots is the spread operator*/
/*Spread syntax can be used when all elements 
from an object or array need to be 
included in a list of some kind.*/

/*With Object*/
const admin = {
  ...user,
  isAdmin: true
};
console.log("Admin", admin);

/*With Array*/
const numbers = [1, 2];
const moreNumbers = [...numbers, 3];
console.log("More Numbers", moreNumbers);
/***************Spread Operator***************/
