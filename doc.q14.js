let readlineSync=require("readline-sync")
let angle1=readlineSync.questionInt("enter the angle:-")
let angle2=readlineSync.questionInt("enter the second angle:-")
let angle3=readlineSync.questionInt("enter the third angle:-")
if(((angle1+angle2+angle3)===180) &&  (Math.min(angle1,angle2,angle3))!=0 && (Math.max(angle1,angle2,angle3)!=180)){
    console.log("YES")
}else{
    console.log("NO")
}