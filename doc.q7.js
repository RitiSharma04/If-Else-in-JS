let readlineSync=require('readline-sync')
let character=readlineSync.question("Enter the character")
if ((character>="a" && character<="z") || (character>="A" && character<="Z")){
    console.log(character,"is an Alphabe")
}else{
    console.log(character," is not Alphabe")
}