import "./styles.css";
/***************Destructuring***************/
/*Object Desturcturing*/
const user = {
  firstname: "Shelim",
  lastname: "Hussain"
};
const { firstname, lastname } = user;
/*{ firstname , lastname } should be same as object key*/
console.log("Fisrt Name is: ", firstname, "and Last Name is: ", lastname);

/*Array Desturcturing*/
const numbers = [1, 2];
const [one, two] = numbers;
console.log("Fisrt Number is: ", one, "and Next Number is: ", two);
/***************Destructuring***************/
