const express = require('express');
const urlRoute = require('./routes/url');
const connect = require('./connection');
const app = express();
const port = 3000;

const URL = require('./models/url');

app.use(express.json());

connect('mongodb://localhost:27017/url-shortener').then(console.log("MGDB connected"))   // / taravataa db naem
app.use("/url",urlRoute);
app.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push : {
        visitHistory : {timeStamp : Date.now()},
    }})

    if (!entry) {
        return res.status(404).json({ message: 'URL not found' });
    }
    res.redirect(entry.redirectUrl);
})

app.listen(port,()=>console.log(`Server is running on port ${port}`));