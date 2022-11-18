let readlineSync=require('readline-sync')
let num=readlineSync.questionInt("enter the num")
if (num%5===0 && num%11===0){
    console.log("yes")
}else{
    console.log("no")
}