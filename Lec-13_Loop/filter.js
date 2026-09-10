let arr = [1,2,3,4,5]
let oddEle2 = arr.filter(function(ele){
    if(ele%2==1) return ele;
})
console.log(oddEle2);


let even = arr.filter(function(ele,idx){
    console.log(idx);
  if(ele%2!=0) return false;
  else{
    return ele;
  }
})
console.log(even);

