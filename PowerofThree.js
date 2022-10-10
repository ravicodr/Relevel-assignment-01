/**
 *  return power all the powers of 3.
*/

function powerOfThree(num){
    if(num<=0) return false;
    if(num==1) return true;
    if(num%3==0) return powerOfThree(num/3);
    
    return false;
}

let nums=27;
let result=powerOfThree(nums);
console.log(result);