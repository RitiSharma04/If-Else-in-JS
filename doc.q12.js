let readlineSync=require("readline-sync")
let Month=readlineSync.questionInt("enter the month number")
if (Month===1||Month===3||Month===5||Month===7||Month===8||Month===10||Month===12){
    console.log(31)
}else if (Month===2){
    console.log(28)
}else{
    console.log(30)
}