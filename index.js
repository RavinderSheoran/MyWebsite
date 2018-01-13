var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname,'client')));

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/MyInformation',{
    useMongoClient: true
});

mongoose.connection.on('error',(err) =>{
    if(err)
    {
        console.log("error in connection "+err);
    }
});

app.get('/',(req, res) =>{
    res.send("hello");
})

const port = 9000;
app.listen(port, () =>{
    console.log("server started at "+port);
})

