import express from 'express';
import fs from 'fs';
import {router} from './routes/user'
import connectMongoDB from './connection';
import {logReqRes} from './middlewares';
import {handleGetAllUsers} from './controllers/user'

const userRouter = router;
const app = express();
const port = 8000;

// Connection to mongodb
connectMongoDB('mongodb://127.0.0.1:27017/project1')

// Schema (defining schema)


// Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(logReqRes("log.txt"));


app.use("/user",userRouter);

app.listen(port,()=>console.log(`Server is running on port ${port}`));