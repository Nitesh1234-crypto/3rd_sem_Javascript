
console.log("start");

let id1=setTimeout(function(){
  console.log("work to do")
},1000)

let id2=setTimeout(function(){
    console.log("timeout 2");
},500)
console.log("end");

let id3=setTimeout(function(){
    console.log("timeout 3");
},200)

console.log("hi");
let id4 =setTimeout(function(){
    console.log("timeout 4");
},1500)

let id5 = setInterval(function(){
    console.log("interval 1")
},1000)

console.log(id1,id2,id3,id4,id5);

clearTimeout(id2);
setTimeout(function(){
clearInterval(id5);
},5000)
console.log("dsfgsdhfisd")



