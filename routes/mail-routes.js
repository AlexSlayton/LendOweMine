// *********************************************************************************
// mail-routes.js - this file offers a set of routes for sending users mail
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var mail = require("../mail/mailsend.js");

// Routes
// =============================================================
module.exports = function(app) {
	app.post('/sendmail', function(req, res){
		// Lets store this info in the DB
		// After its been stored, in the callback of the database request send the email below
		// Lets send an email
		var subject = "You have recieved a request to return an item.";
		var text = "Strip out the HTML from the req.body.message and store it in this url";
		var options = mail.mailOptions(req.body.email, subject, text, req.body.message);

		mail.sendMail(options, function(){
			res.redirect("/lend");
		});

	});
};