var c=50
function outer(){
    let a =10;
    function inner(){
        var b=20
        a++;
        console.log(a);
    }
    // inner();
    return inner;
}
console.log(a);
//closure har baar naya bnta hai
let f1=outer();
f1()
f1()
let f2=outer();
// console.log(f1);
f2() //inner();
f2();