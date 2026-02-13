const fs=require('fs');

// Sync...

//fs.writeFileSync('./test.txt','Hey There');
//fs.writeFileSync('./test.txt','Hello World'); // will overwrite the first one


// WAY TO STOP THE OVERWRITE
fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

// Async...
//fs.writeFile("./test.txt","Hello World Async", (err) => {});

// const result=fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);


// Case when we will use asynchronous function

// fs.readFile("./contacts.txt", "utf-8", (err, result) =>{
//     if(err){
//         console.log("Error",err);
//     }                                          // in case of asynchronous we have to give a callback
//     else{
//         console.log(result);
//     }
// })


// const os=require("os");
// console.log(os.cpus().length);   size=12 which can be max no of thread for this system




