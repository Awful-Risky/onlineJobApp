angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);


angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', applicantController])

function applicantController ($scope, $http) {
	$http.get('/getter')
		.then(function(returnData){
			$scope.applicants = returnData.data
		});	
	$scope.deleteByID = function  (applicantID) {
		console.log('This works', applicantID)
		$http.post('/deleter', { applicantID : applicantID})
			.then(function(returnData){
				$scope.applicants = returnData.data
			})
	}
};
