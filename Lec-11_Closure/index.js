
// let roll=null;
// function changeRoll(roll_Num){
//  roll=roll_Num;
// }

// console.log(roll);
// changeRoll(25);
// roll=65;
// console.log(roll);

function incrementAttendance(){
    let attendance=0;
    function change(){
        attendance++;
        console.log(attendance);
    }
    return change;
   
}
let StudentOneincrement=incrementAttendance();
StudentOneincrement();
StudentOneincrement();

let studentTwoIncrement= incrementAttendance();
studentTwoIncrement();

