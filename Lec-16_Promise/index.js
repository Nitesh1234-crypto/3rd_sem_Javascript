 let age = 17
 let p = new Promise((resolve,reject)=>{
    if(age>18) resolve("promise pura kr diya ");
    else{
        reject("promise pura nhi kiya")
    }
 });

p
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


//create a function which return a promise to add two number
function sum(a,b){
 let p = new Promise((resolve,reject)=>{
      if(typeof a !=="number" || typeof b!=="number"){
        reject("both a and b should be number")
      }else{
        resolve(a+b);
      }
 })
 return p;
}
sum(3,"4")
.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err);
})