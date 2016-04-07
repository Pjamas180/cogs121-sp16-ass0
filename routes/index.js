var models = require('../models');

exports.view = function(req, res) {
	var messageSchema = models.messageSchema;
    //var data = {data: models.messageSchema};
    var json = 1;
    messageSchema.find({}, function (err, docs) {
    	if (err) {
    		console.log(err);
    		res.send(500);
    	}
    	else {
    		var data = {"data": docs};
        	res.render("index", data);
    	}
    });
    //res.render("index", data);
}
