angular.module('myApp', []).controller('myCtrl', function($scope, $http) {
		$scope.fmail= 'jiapengjun'
		$scope.lmail= 'gmail.com'

		$http.get("script/link.json").success(function(response) {
			$scope.local= response.local; 
			$scope.drive = response.drive; 
			$scope.utube = response.utube; 
			console.log($scope);
		}) ;
	});
