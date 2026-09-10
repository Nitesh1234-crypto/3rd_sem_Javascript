let arr = [1,2,3,4,5];


let doubleArray = arr.map(function(ele){
  let double = ele*2;
  return double;
})

console.log(arr);
console.log(doubleArray);

//find all odd element
let oddEle = arr.map(function(ele,idx){
    console.log(idx);
    if(ele%2==1) return ele;
});

console.log(oddEle);

