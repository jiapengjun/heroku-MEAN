angular.module('myApp', [])
	.config(function($compileProvider){
	  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|magnet|javascript):/); 
	})
	.controller('myCtrl', function($scope, $http) {
		var seed = this ;

		seed.fmail= 'jiapengjun'
		seed.lmail= 'gmail.com'

		$http.get("script/seed_drama.json").success(function(response) {
			seed.drama = response.records; }) ;

		$http.get("script/seed_movie.json").success(function(response) {
			seed.movie= response.records; }) ;

		$http.get("script/seed_anime.json").success(function(response) {
			seed.anime= response.records; }) ;

		$http.get("script/seed_docum.json").success(function(response) {
			seed.documentary= response.records; }) ;

	});
