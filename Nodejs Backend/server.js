// const express = require('express');
// const app = express();

// const PORT = 3001;

// app.get('/posts', (req, res)=>{
//     res.send({
//         name: 'GET API'
//     })
// })

// app.listen(PORT, ()=>{
//     console.log("Server is runnings at port: ", PORT);
// })

var mongoUrl = 'mongodb://localhost:27017/testdb';
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true });

mongoose.connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log('DB Connected!')
})
.catch(err => {
    console.log("Error", err);
});