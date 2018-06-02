var mongoose = require('mongoose');
mongoose.set('debug',true);//it allows us to see what is happening at a given point of time inside database

mongoose.connect('mongodb://localhost/todo_api');

mongoose.Promise = Promise; //now we can use .then() rather than using a callback function
 
module.exports.Todo = require('./todo');  