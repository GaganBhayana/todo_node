var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require(mongoose);

var todoRoutes = require('./routes/todo.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	console.log("Hello gagan");
	res.send("Root directory");
})

app.use('/api/todos',todoRoutes);


app.listen(3000,function(){
	console.log("App is running on port "+"3000");
})