let arr = [1,2,3,4,5];
let sum=0;
for(let i =0;i<arr.length;i++){
sum+=arr[i];
}
console.log(sum);

let sum2=arr.reduce(function(acc,curr){
  return acc+curr;
},0)
console.log(sum2);

let sum3 = arr.reduce(function(acc,curr){
    return acc+curr;
})

console.log(sum3);
//acc = arr ka first element (o index)
//curr = second element se loop start hota hai ( 1st index)