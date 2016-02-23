var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
	name    : String,
	bio     : String, 
	skills  : Array,
	years   : Number,
	why     : String, 
})

module.exports = mongoose.model('Applicant', applicantSchema)

// var Applicant = mongoose.model('Applicant', applicantSchema);

// module.exports = {
// 	Applicant : Applicant
// }




// // Tony's Style
// var 
// 	mongoose = require('mongoose'),
// 	Schema   = mongoose.Schema,
// 	//Applicant Model
// 	applicantSchema = new Schema({
// 		name    : String,
// 		bio     : String, 
// 		skills  : Array,
// 		years   : Number,
// 		why     : String 
// 	})

// module.exports = {
// 	Applicant : mongoose.model('Applicant', applicantSchema)
// }