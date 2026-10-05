// // 1. function ko variable mai store kr skte hai
// //function decalaration
// // function foo(){

// // }
// // console.log(fun);
// // fun(); //erro : fun is not a function
// // function expression
// // var fun = function(){
// //     console.log("hello")
// // }
// // fun();
function fun(a,b){
    console.log(a+b);
}
function foo(a){
  console.log(a); //
  //if a is a function
//  then  a(2,3);
}
// foo(function(){}) //Annonymous function

// foo(fun());
let result=foo(10);
console.log(result);




function foo(cb){
    return cb;
}
function fun(){
    console.log("hello world")
}
let result=foo(fun);
let output=result(); //return value
console.log(output); //undefine

// console.log(result());
