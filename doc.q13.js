let readlineSync=require("readline-sync")
let amount=readlineSync.questionInt("enter the amount")
let c=(amount.toString()).length
for(let i=0;i<=c ;i++){
    console.log(amount%10)
     amount=Math.floor(amount)
}
