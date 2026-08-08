// there is no return type;
function function_Name(){
    console.log("some work");
    return 5;
}

let result =function_Name();
//5
console.log(result);
let x = result+"45";
console.log(x);

/**
 * 
 * Explicit Number typecast using +/-
 */

// console.log(+"6" + "55")//655
// console.log(-"6" + 55);//61 -->655
// console.log(55 + +[1] + +"6");//


// how to pass parameter
function add(a,b){
    console.log(a,b);
   
    return a+b;
    

}
let out=add("5",2);
console.log(out);

//default parameter
function add(a=2,b=3){
    console.log(a,b);
   
    return a+b;
    
}
let out2=add(10); // if you do not pass the argument , the function will use default value
console.log(out2);