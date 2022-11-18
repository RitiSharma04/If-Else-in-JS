let readlineSync=require("readline-sync")
let Days=readlineSync.questionInt("entr the days name:-")
if (Days===1){
    console.log("Sunday")
}else if(Days===2){
    console.log("Monday")
}else if(Days===3){
    console.log("Tuesday")
}else if(Days===4){
    console.log("Wednesday")
}else if(Days===5){
    console.log("Thursday")
}else if(Days===6){
    console.log("Friday")
}else if (Days===7){
    console.log("Saturday")
}else{
    console.log("Only 7 week days are there")
}