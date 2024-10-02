let express = require('express');
let app = express();
app.get('/', (req,res)=>{
    res.send('Hello Express');
});
console.log("Hello World");
app.get('/', (req,res)=>{
    res.sendFile('/views/index.html');
});



































 module.exports = app;
