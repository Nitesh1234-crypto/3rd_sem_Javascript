// how to add element and get in array

//1. using index
let arr = [2,20,30,40,50,60,70,80,90,100]; //{10,20,30}
//set
arr[0] = 10;
arr[10] = 100;

//System.out.println(arr); //[10,20,30]
// int arr[5];
// arr = [1,2,3,4,5];
// cout<<arr
//cout<<arr print address

console.log(arr);

//how to access any value in javascript
//using index.
//get
let val = arr[7];
console.log(val);

//2. push and pop
// push add element at last
arr.push(9);
console.log(arr);

//get element from length
let len = arr.length;
console.log(arr[len-1]);

//remove element from last
arr.pop();
console.log(arr);


// first pe add and first se remove

// shift - remove at first, unshift - add at first

arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);


//how to remove element at any index.
//splice(index,length)

arr.splice(3,1);
console.log(arr);
arr.splice(3,2);
console.log(arr);
arr.splice(3);
console.log(arr);

//slice
//[10,20,30] 
let values=arr.slice(1,2);  //start index include but exclude end index
console.log(values);

console.log(arr.at(-1));


str = "hello shafana"
str.substring(4,8) //starting index wala element substring mai include hoga, but ending index wala element include nhi hoga
//"o sh"

//loop nhi padhna --> map,filter, reduce, forEach, 


