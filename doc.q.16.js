let readlineSync=require("readline-sync")
let side_1=readlineSync.questionInt("enter the first side:-")
let side_2=readlineSync.questionInt("enter the second side:-")
let sid_3=readlineSync.questionInt("enter the third side:-")
switch(side_1,side_2,sid_3){
    case (((side_1+side_2)>0)&&((side_2+sid_3)>sid_3)&&((sid_3+side_1)>side_2)):
        switch(side_1,side_2,sid_3){
            case((side_1===side_2)&&(side_2===sid_3)&&(side_1===sid_3)):
                        console.log("equilatera")
                        break;
            case(((side_1===side_2)|(side_2===sid_3)|(side_1===sid_3))):
                        console.log(" isosceles")
                        break;
            default:
                        console.log("scalene") 
                        break;
        }        
        break;       
        default:
            console.log("This is not a triangal")
            break;
}