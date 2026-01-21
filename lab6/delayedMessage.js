//Write a function delayedMessage(message, delay) that prints the message after the specified delay using setTimeout. Use a callback for when the message has been printed.


function delayedMessage(message,delay,callback){
    setTimeout(()=>{
        console.log(message);
        callback();
    }, delay)
}

delayedMessage("Hello after delay",2000,()=>{
    console.log("Message printed successfully");
})

