let readlineSync=require('readline-Sync');
let num=readlineSync.questionInt("enter the num:-")
if(num>0){
    console.log("positive")
}else if (num<0){
    console.log("negative")
}else{
    console.log("zero")
}