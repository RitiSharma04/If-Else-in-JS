let r=require('readline-sync');
let year=r.questionInt("enter the year:");
if ((year%400===0 && year%100===0) || (year%4===0 && year%100!==0)){
    console.log("This is a leap year")
}else{
    console.log("This is not a leep year")
}