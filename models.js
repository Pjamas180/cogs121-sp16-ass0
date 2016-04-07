var mongoose = require('mongoose');
var db = require('./db');

var messageSchema = new mongoose.Schema({
	"email": String,
	"content": String,
	"created": Date
});



exports.messageSchema = mongoose.model('message', messageSchema);