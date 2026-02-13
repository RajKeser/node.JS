// const math=require('./math');

// const {add, sub}=require('./math) also an option to avoid the overwrite

// console.log(math(2,6));
// console.log(math(2-3));   case of overwrite (in such case use java-script objects)

// console.log("Math value is", math.addFn(2,4));
// console.log("Math value is", math.subFn(2,4));

// console.log("Math value is", math.add(2,4));
// console.log("Math value is", math.sub(2,4));



const math=require("fs");  // search for data in node directory
//const math=require("./fs");  // search for data in current directory 

console.log("Math value is", math);


