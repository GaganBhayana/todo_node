var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require(mongoose);

var todoRoutes = require('./routes/todo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/views"));// __dirname is used, since for the cases when we try to access it from outside out root directory this will specify what we want to acces
app.use(express.static(__dirname +'/public'));

app.get("/",function(req,res){
	res.sendFile("index.html")
})

app.use('/api/todos',todoRoutes);


app.listen(3000,function(){
	console.log("App is running on port "+"3000");
}) 