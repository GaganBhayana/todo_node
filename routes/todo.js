var express = require('express');
var router = express.Router();
var db = require('../models');//it will automatically require the index.js inside models and from there we will get the reference

router.get('/',function(req,res){
	db.Todo.find()
	.then(function(todos){
		res.send(todos); 
	})
	.catch(function(err){
		res.send(err);
	})
})

router.post('/',function(req,res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.status(201).json(newTodo);//if successfully posted
	})
	.catch(function(err){
		res.send(err);
	})
});

router.get('/:todoId',function(req,res){
	db.Todo.findById(req.params.todoIdo)
	.then(function(foundTodo){
		res.json(foundTodo) 
	})
	.catch(function(err){
		res.send(err);
	})
})

router.put('/:todoId',function(req,res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId},req.body,{new:true})//new:true: by default the put request would return the value which was there before the update
	// but by typing new:true, it only sends the updated 	
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
})

router.delete('/:todoId',function(req,res){
	db.Todo.remove({_id:req.params.todoId})
	.then(function(){
		res.json({message:'Temporary message'})
	})
	.catch(function(err){
		res.send(err);
	})
})


module.exports = router;