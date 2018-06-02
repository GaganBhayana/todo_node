// each todo has a name, complete/or not , created_date

mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: {
		type:String,
		required: 'Name can not be empty!' // if we leave it blank we get this error
	},
	completed:{
		type: Boolean,
		default: false //dafault value
	},
	createdData:{
		type: Date,
		default: Date.now
	}
});

var Todo  = mongoose.model('Todo',todoSchema);

module.exports = Todo;

