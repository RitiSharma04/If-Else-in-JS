var readlineSync=require('readline-sync')
var num1=readlineSync.questionInt("enter the num;-")
var num2=readlineSync.questionInt("enter the num:-")
var num3=readlineSync.questionInt("enter the num:-")
if(num1>num2 && num1>num3){
    console.log(num1,'is greater')
}else if(num2.num1 && num2>num3){
    console.log(num2,"is greater")
}else if(num3>num1 && num3>num2){
    console.log(num3,"is greater")
}else{
    console.log("all are equale")
}