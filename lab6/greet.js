//function greet that takes a name and a callback function. The function should return a greeting message by calling the callback with the message.

function greet(name,callback){
    const message=`Hello ${name}`;
    return callback(message);
}

greet("Srineeth",function(message){
    console.log(message);
})
