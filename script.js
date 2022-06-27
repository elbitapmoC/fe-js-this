'use strict';

// THIS in Arrow Functions
// const logThis = () =>{
//   console.log(this); // Window
// } 

// console.log(this);
// const btn = document.querySelector('button');
// btn.addEventListener('click', logThis);

// THIS in functions
// function logThis(){
//   console.log(this);
// }
// logThis(); //undefined

// THIS in Objects
// function logThis(){
//   console.log(this);
// }
// const obj = {
//   num: 20,
//   logThis
// }
// obj.logThis(); // Object

// THIS in Event Listeners
// function logThis(){
//   console.log(this);
// }

// Binding THIS
// function logThis(x,y){
//   console.log(this);
//   console.log(x,y);
// }
// const obj = {
//   num: 10,
// }
// logThis(); //undefined
// const boundLogThis = logThis.bind(obj); // binding the function to the obj.
// boundLogThis(10,20);

// 1st
// const boundLogThis = logThis.bind(obj, 75); // binding the function to the obj.
// 2nd
// boundLogThis(220);

// THIS in Arrays
// function logThis(){
//   console.log(this);
// }

// [1,2,3].forEach(num=>{
//   console.log(this);
// console.log(num);
// })

// [1,2,3].forEach(function(num){
//   console.log(this); //undefined
//   console.log(num);
// })

// [1,2,3].forEach(function(num){
//   console.log(this); //Object, referring to object below.
//   console.log(num);
// }, {num: 10})
