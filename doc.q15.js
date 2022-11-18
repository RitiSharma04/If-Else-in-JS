let readlineSync=require("readline-sync")
let side1=readlineSync.questionInt("enter the first side")
let side2=readlineSync.questionInt("enter the second side:-")
let side3=readlineSync.questionInt("enter the third side:-")
if(((side1+side2)>side3)&&((side2+side3)>side3)&&((side3+side1)>side2)){
    console.log("YES")
}else{
    console.log("NO")
}
