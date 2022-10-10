/**
 * Implement a map using the inversion of control principle that will perform
 * operation on an array such as:
 * 1. Squaring the elements
 * 2. Dividing them by 5
 * 3. The root of the element
 * 4. etc.
 */

function operation(array, arrayFunction){
    const map = array.map(arrayFunction);
    return map;
}
const nums = [2,4,6,8];

//Squaring the elements..
let Squaring = operation(nums, x => x*2);
console.log(Squaring);

//Dividing them by 5
let divide = operation(nums, x=> x/5);
console.log(divide);

// square root 
let root = operation(nums, x=>Math.sqrt(x));
console.log(root);

//etc
let minus = operation(nums, x=> x-2);
console.log(minus);