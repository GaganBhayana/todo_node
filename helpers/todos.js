var db = require('../models');

exports.getAllTodos = function(req,res){
	db.Todo.find()
	.then(function(todos){
		res.json(todos); 
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.createTodo = function(req,res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.status(201).json(newTodo);//if successfully posted
	})
	.catch(function(err){
		res.send(err);
	})
	// console.log(req.body);
}

exports.getTodo = function(req,res){
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo){
		res.json(foundTodo) 
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.updateTodo = function(req,res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId},req.body,{new:true})//new:true: by default the put request would return the value which was there before the update
	// but by typing new:true, it only sends the updated 	
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.deleteTodo = function(req,res){
	db.Todo.remove({_id:req.params.todoId})
	.then(function(){
		res.json({message:'deleted successfully'})
	})
	.catch(function(err){
		res.send(err);
	})
}
module.exports = exports;