let express = require('express');
let app = express();
app.get('/', (req,res)=>{
    res.send('Hello Express');
});
app.get('/', (req,res)=>{
    const absolutePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(absolutePath);
});



































 module.exports = app;
