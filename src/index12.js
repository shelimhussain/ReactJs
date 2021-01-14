import "./styles.css";
/***************Promises***************/
const user = {
  firstname: "Shelim",
  lastname: "Hussain"
};

const GivemeAPromise = () => {
  const promiseAction = (resolve, reject) => {
    //setTimeout(resolve(user), 1000);
    setTimeout(reject(user), 1000);
  };
  return new Promise(promiseAction);
};

const promise1 = GivemeAPromise();
promise1
  .then((data) => console.log("Promise resolved", data))
  .catch(() => console.log("Promise is rejected"));
/***************Promises***************/
