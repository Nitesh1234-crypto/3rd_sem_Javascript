// var a= 10;
// let b=20;
// {
//     let b=30;
//     var a=40;
//     console.log(a,b) //40,30
// }

//  console.log(a,b) //40,20

//  function work(){
//     var a = 10;
//     return a*5;
//  }
//  function work2(){
//     var a = 40;
//     return a+60;
//  }

var a = 10;
var c=60
function fun(){
  let b = 10;
  var a=50;
  a++;
  c++;
  console.log(a);//51 
  console.log(b);//10
  console.log(c);//61 //undefined
}
fun();
console.log(a,c) // 11/10/51,10,61/60

//error --> b is not define