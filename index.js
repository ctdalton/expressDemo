const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const port = process.env.PORT || 3000;
const path = 'pub/recipes.txt';

app.get('/', (req, res) =>{
    res.send('Hello');
})
app.get('/time', (req, res) =>{
    let currentTime = new Date().toTimeString();
    res.send('Current time is :' + currentTime);
})
app.get('/file', (req, res) =>{
    fs.createReadStream(path).pipe(res);
})
app.post('/add', (req, res)=>{
    let userName = req.body.userName;
    let newMessage = req.body.newMessage;
    let logMsg = userName + " said " + newMessage;
    console.log(logMsg);
    res.send('got your message: ' + logMsg);
})

app.listen(port, () =>{
    console.log('Listening to Port :' + port );
    console.log('client can connect to http://localhost:' + port);
})