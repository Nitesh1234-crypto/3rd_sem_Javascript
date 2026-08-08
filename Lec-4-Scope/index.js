var a;
let b;
console.log(a)
console.log(b);

function fun(){
    var c=10;
    console.log(c);
}
// {
// var c=10;
// }
fun();
// console.log(c)

var d = null;

function sum(a,b){
    console.log(typeof b);
    return a+b;
}
console.log(sum(10));

console.log(typeof null);
