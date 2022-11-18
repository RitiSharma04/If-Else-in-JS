let readlineSync=require('readline-sync')
let  character =readlineSync.question("enter the  character ")
if (((character>=65 && character<=90) || (character>=97 && character<=122))){
    console.log("it is alphabet")
}else if (character>=48 && character<=57){
    console.log("it is a number")
}else{
    console.log("it is spasial ch")
}

// console.log(character.charCodeAt(0))