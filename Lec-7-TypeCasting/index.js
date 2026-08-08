let num = "10";
let num2 = Number(num);
//if you want to check type of any value. => we use typeof operator
console.log(typeof num);
console.log(typeof num2);
//logic ==> num ki value bhejoge usme mai 10 increment 
// krke return krunga;
function incrementBy10(num){

    return Number(num)+10;
}

let result = incrementBy10(num);
console.log( result);

let arr = [];
console.log(Number(arr));
console.log(Number(""));
console.log(Number("      "))
console.log(Number("...."))
console.log(Number({a:10}))
// // console.log(Number([1,2]))
// console.log(Number([23]));
// //string
// console.log(String([]));
// console.log(String([1,2]));

// console.log(Number([1,2]));
// console.log(Number("1,2"));
// console.log(String({})) //"{}"
console.log(String({a:10}));//"{"a":"10"}""


//expectation-20; but rec==>"1010"