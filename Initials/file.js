// const fs = require("fs");
// sync
// try {
//     fs.writeFileSync("./test.txt", "Hello, World!");
//     console.log("File created successfully!");
// } catch (error) {
//     console.error("An error occurred:", error.message);
// }

// .async

// fs.writeFile("./test.txt","Hello word async" ,(err)=>{})


// const res = fs.readFileSync("./contacts.txt","utf-8");
// incase of sync we can create a variable and store the data in it, edo okati return chestadi

// console.log(res);

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })

// but this is async so we can't store the data in a variable , nothing is returned bro, it always expects the call backs

// fs.appendFileSync("./test.txt",`${Date.now()}hey there\n`);

// fs.cpSync("./test.txt","./test2.txt");   // copies the file
// fs.unlinkSync("./test2.txt");  // deletes the file
// fs.statSync("./test.txt");   // gives the stats of the file
// console.log(fs.statSync("./test.txt"));   // gives the stats of the file
// fs.mkdirSync("./test");  // creates a directory


// const chalk = require("chalk");
import chalk from "chalk";

console.log(chalk.red("Hello, World!"));

```
in package json file if u add type:module then we can use import instead of require
basic ga it  uses the commonjs module system, which treats the files as a standalone script , but in case of 
es modules the files are treated as modules and the imports are used to import the modules

that's why we use import instead of require and as well module.exports to export the functions 
```

```
CommonJS files are standalone scripts unless you explicitly share code using module.exports.
Without module.exports, no code is accessible outside the file.
ES Modules treat all files as modules by default, allowing import/export directly.

```

```
fs , path , http are the internal packages in node js which are used to perform the file system operations,
 path operations and http operations respectively
```

```

"chalk": "^5.3.0"

The format is as follows - MAJOR.MINOR.PATCH
```


```

client makes a requeest to node js server and enters into event queue and
then event loop picks up the request and processes it , if it is non blocking then it will
be processed and sent back to the client else it will be sent to the worker pool and then it will be processed , (blocking)
```

// default thread pool size is 4
// max thread pool size depends on cpu cores