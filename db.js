var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Item = new Schema({
	name: {type: String, required: true},
	cost: {type: Number, required: true}
});

mongoose.model( 'Item', Item );
mongoose.connect( 'mongodb://localhost/budget-app' );
