angular.module('myApp', [])
	.config(function($compileProvider){
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|magnet|javascript):/);
	})
	.controller('myCtrl', function($scope, $http) {
		$scope.fmail= 'jiapengjun'
		$scope.lmail= 'gmail.com'

		$http.get("script/train.json").success(function(response) {
			$scope.github= response.records; }) ;

	});
