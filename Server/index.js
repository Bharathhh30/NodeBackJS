// import http from 'http';
// import fs from 'fs';
import url from 'url';

// const myserver = http.createServer((req,res)=>{
//     // console.log(req);
//     const log = `${Date.now()}:${req.url}:New request recieved\n`
//     const parsedUrl = url.parse(req.url,true)
//     console.log(parsedUrl);
//     fs.appendFile('logs.txt',log,(err,data)=>{
//         // res.end("Hello World from server");
//         switch(req.url){
//             case "/":
//                 res.end("Hello World from server");
//                 break;
//             case "/yashna":
//                 res.end("Hello Yashna from server");
//                 break;
//             case "/404":
//                 res.end("Page not found");
//                 break;
//             default:
//                 // res.end("Hello Viraj from server");
//                 const username = parsedUrl.query.myname;
//                 res.end(`Hello ${username} from server`);
//                 break;
//         }
//     })
//     // res.end("Hello World from server Again");
// });

// myserver.listen(8000,()=>console.log("Server is running on port 8000"));

import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World from express");
})

app.get('/yashna',(req,res)=>{
    res.send("Hello Yashna from express");
})

app.get('/bharath',(req,res)=>{
    res.send("Hello"+req.query.myname+" from express");
})

app.listen(8000,()=>console.log("Server is running on port 8000"));