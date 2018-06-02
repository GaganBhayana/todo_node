var express = require('express');
var router = express.Router();
var db = require('../models');//it will automatically require the index.js inside models and from there we will get the reference
var helpers = require('../helpers/todos.js');

router.route('/')
	.get(helpers.getAllTodos)
	.post(helpers.createTodo);

router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo);

module.exports = router;