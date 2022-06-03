// Import stylesheets
import './style.css';

// *********************************************
// ****************** Promise *****************
// *********************************************

//creating a Promise for Dinner Scenario
// ------------------------------------------

//Resolve scenario
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //food truck found
    //change status from 'pending' to 'fulfilled'
    resolve('Bringing Tacos');
  }, 5000);
});

//Reject scenario
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //food truck not found
    //change status from 'pending' to 'rejected'
    resolve('Not briinging tacos. Food truck is not there.');
  }, 5000);
});

//Success and failure callbacks
// ------------------------------------------

//success callback
const onFulfillment = (result) => {
  //resolve was called
  console.log(result);
  console.log('Set up the table to eat tacos.');
};

//failure callback
const onRejection = (error) => {
  //reject was called
  console.log(error);
  console.log('Start cooking pasta');
};

//Executing callbacks
promise1.then(onFulfillment);
promise2.catch(onRejection);
// Bringing Tacos
// Set up the table to eat tacos.

// promise2.then(onFulfillment).catch(onRejection);

//Promise - static methods
// --------------------------------------------

//Promise.all()
// ..................................
const promise11 = Promise.resolve(3);
const promise21 = 42;
const promise31 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise11, promise21, promise31]).then((values) => {
  console.log(values);
});

//expected output:
// [3, 42, "foo"]

//Promise.allSettled()
// ..................................
Promise.allSettled([promise11, promise21, promise31]).then((values) => {
  console.log(values);
});

//expedted output:// [3, 42, "foo"]
/* 
[Object, Object, Object]
0: Object
status: "fulfilled"
value: 3
__proto__: Object
1: Object
status: "fulfilled"
value: 42
__proto__: Object
2: Object
status: "fulfilled"
value: "foo"
__proto__: Object
*/

//Promise.race()
// ----------------------------------------------
const promise12 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise32 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise12, promise32]).then((value) => {
  console.log(value);
  //Both resolve, but promise32 is faster
});

//expedted output:
//two

// ************************************************
// **************** async-await *******************
// ************************************************


// ************** async ******************
// ----------------------------------------

async function greet() {
  return 'This is first Hello';
}

console.log(greet());
// Promise {<fulfilled>: 'Hello'}
// Promise {}
// __proto__: Promise

async function myGreet() {
  return Promise.resolve('I said Hello');
}

console.log(myGreet());
// Promise {}
// __proto__: Promise
// I said Hello

myGreet().then((value) => console.log(value));
//Hello

// ************** await ******************
// ----------------------------------------

async function sayGreet(){
  let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Say Hello!'), 1000)
  })

  let result = await promise; //wait until the promise resolves 

  console.log(result);
}

console.log(sayGreet());
// Say Hello!

