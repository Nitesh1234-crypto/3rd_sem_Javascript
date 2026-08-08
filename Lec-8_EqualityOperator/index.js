console.log("1"==1);//T

console.log("a"==2)//F


console.log(""==0)//T
console.log("    "==0)//T

console.log(""=="     ") //F
console.log([]=="");

console.log(["a"]=="a");
console.log([]=="     ");
console.log({}==0);
console.log(undefined==0);
console.log(true==0);
console.log(true=="abc");
console.log("abc"==true);
console.log(["1"]==true);



//

console.log([]==[]);//F
console.log({}=={})//F
console.log([1,2]==[1,2])
let arr = [1,2,3];
console.log(arr==arr);

// let arr = [];

// console.log(arr[1]);//undefined

// console.log(arr[99]);//undefined


// primitive data type ===> Non primitive data type
//pass by Value.          pass by ref
