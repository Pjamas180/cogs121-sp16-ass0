var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
    var currentDate = new Date();
    var post = new models.messageSchema({
    	email: req.email, 
    	content: req.content, 
    	created: currentDate
    });

	post.save(function (err) {
		if (err) {
			return err;
		}
		else {
			console.log("Post saved");
			res.redirect('/');
		}
	});
};