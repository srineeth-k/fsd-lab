// Write a JavaScript console program to implement async/await using promises.
// Constraints:
// 1. Create a function named findAbsolute(n) which accepts a value and
// returns the promise.
// 2. Function findAbsolute(n) will check whether n is an absolute value or not.
// 3. If ‘n’ is an absolute value, then resolve the promise with message
// ‘Absolute value!!’, else reject the promise with message ‘Invalid’.
// 4. Create an async function named findResult(n) which gets ‘n as an input
// from the file and passes it to the method findAbsolute().
// 5. Use the keyword await inside async function to wait until that promise
// settles and returns its result.
// 6. Display the message inside async function.

function findAbsolute(n){
    return new Promise((resolve,reject)=>{
        if(typeof(n)==="number" && n>=0){
            resolve("absolute value");
        }
         else {
            reject("Invalid");
            }
        });
}

async function findResult(n) {
 try {
 const result = await findAbsolute(n);
 console.log(result);
 } catch (error) {
 console.log(error);
 }
}
findResult(-5);

// console.log(typeof(5))