// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Include Mongoose and Connect to Mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mycompanyname');

// Include the Back-End controller
var applicantCtrl = require('./controllers/applicantCtrl.js')

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});

// Make call to server to Delete by ID
app.post('/deleter', applicantCtrl.deleteApplicant);

// Gets Applicants
app.get('/getter', applicantCtrl.getApplicants);

// Creates Applicant
app.post('/applicant', applicantCtrl.createApplicant)


// app.post('/applicant', function(req, res){
// 	console.log(req.body);
// 	// Here is where you need to get the data
// 	// from the post body and store it in the database
// 	// res.send('Si, muy functional');
// 	res.redirect('/success/');
// });

// app.get('/success/', function(req, res){
// 	res.send('Si, muy success');
// });


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})