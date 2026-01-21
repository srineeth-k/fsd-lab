//Write a JavaScript console program to compare 2 strings using promise function (resolve, reject), if the strings are same, resolve the promise, else reject it.
// Constraints:
// 1. Case sensitive string comparison should be done.
// 2. Promises should be consumed by registering functions .then and .catch method.

function compareStrings(str1,str2){
    return new Promise((resolve,reject)=>{
        if(str1===str2){
            resolve("Strings are same");
        }
        else{
            reject("Strings are different");
        }
    });
}

compareStrings("hey","hey!")
    .then(res=>console.log(res))
    .catch(err=>console.log(err));