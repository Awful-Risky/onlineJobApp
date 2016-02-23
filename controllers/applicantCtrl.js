var Applicant = require('../models/applicant.js')

function createApplicant (req, res){
	var applicant = new Applicant({
		name   : req.body.name,
		bio    : req.body.bio,
		skills : req.body.skills.split(','),
		years  : +req.body.years,
		why    : req.body.why
	})

	applicant.save(function(err, savedApplicant){
		res.send(savedApplicant)
	})
}


function getApplicants (req, res){
	Applicant.find({}, function(err, docs){
		res.send(docs);
	})
}


module.exports = {
	createApplicant : createApplicant,
	getApplicants   : getApplicants
}