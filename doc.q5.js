let readlineSync=require('readline-sync')
let num=readlineSync.questionInt("enter the num")
if(num%2===0){
    console.log("It is even")
}else{
    console.log("It is odd")
}