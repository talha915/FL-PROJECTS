const express = require('express');
const db = require('./database/db.js');
const app = express();
const PORT = 5000;

const customMiddleware = (req, res, next)=> {
    console.log("Middleware executed!")
    next()
}

app.get('/', (req, res)=> {
    res.send('Hello World');
})

app.get('/about', customMiddleware, (req, res)=> {
    console.log("ABout");
    res.send('About Page');
})

app.listen(PORT, ()=> {
    console.log("Server is Running at: ", PORT);
})