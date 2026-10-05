function starter(cb){
    setTimeout(function(){
        console.log("starter served")
        cb()// -->drinks
    },1000)
}
function mainCourse(cb){
    setTimeout(function(){
        console.log("maincourse served")
        cb()
    },2000)
}
function drinks(cb){
    setTimeout(function(){
        console.log("drinks served")
        cb();
    },500)
}
function Sweets(cb){
    setTimeout(function(){
        console.log("sweets served")
        cb()
    },200)
}
function bill(cb){
    setTimeout(function(){
        console.log("bill payed")
        cb()
    },100)
}

//group
//starter-->drinks--> maincourse -->sweets -->bill

// starter();
// drinks();
// mainCourse();
// Sweets();
// bill();
// starter(drinks);
// starter(function(){
//     drinks(function(){
//         mainCourse(function(){
//             Sweets(function(){
//                 bill(function(){
//                     console.log("ghr chlte hai")
//                 })
//             })
//         })
//     })
// })
console.log("hi");

//drinks -->starter-->sweets-bill

drinks(function(){
    starter(function(){
        Sweets(function(){
            bill(function(){
                console.log("ghr chlte hai")
            })
        })
    })
})