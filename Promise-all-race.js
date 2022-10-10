//Promise all

/*JavaScript Promise.all() static method is used to execute multiple promises in parallel. 
This method is used to compute the result of multiple asynchronous operations. It is typically used when there are multiple asynchronous tasks that are dependent on one another to complete successfully, 
as it does not wait and will reject immediately upon any of the input promises rejecting.*/

//The Promise.all() method accepts a list of promises/array of promises as an argument. 

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});
Promise.all([promise1, promise2]).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
});



/*Promice.race
The JavaScript Promise.race() static method accepts an iterable of Promises and returns a new Promise which resolves or rejects as soon as the first of the promises in the iterable has resolved or rejected. 
When the iterable passed is empty, the promise returned will be forever pending.*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise with 100 has resolved');
        resolve(100);
    }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise with 200 has resolved');
        resolve(200);
    }, 2 * 1000);
});
Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));