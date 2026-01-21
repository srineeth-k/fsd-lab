//Create three functions that take a number, multiply it by 2, subtract 3, and then add 10. Use callbacks to chain these operations together.

function multiply(n,callback){
    return callback(n*2);
}
function subtract(n,callback){
    return callback(n-3);
}
function add(n,callback){
    return callback(n+10);
}

multiply(10,function(result1){
    subtract(result1, function(result2){
        add(result2,function(result3){
            console.log(result3);
        })
    })
});

