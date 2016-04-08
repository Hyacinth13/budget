var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Expense = new Schema({
	name: {type: String, required: true},
	cost: {type: Number, required: true}
});



mongoose.model( 'Expense', Expense );
mongoose.connect( 'mongodb://localhost/budget-app' );
