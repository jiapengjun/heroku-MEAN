(function() {
	"use strict" ;

	var app = angular.module('myApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider

		.when('/',  {
			templateUrl: 'view/bookshelf.html',
			controller: 'bookshelfCtrl as bookshelf' 
		})

		.when('/book/:id', {
			templateUrl: 'view/book.html',
			controller: 'bookCtrl as book'
		})
		.otherwise({redirectTo: '/'});
	});

	function bookshelfCtrl($http) {
		var bookshelf = this; 

		$http.get("js/bookshelf.json")
		.success(function(response) {
			bookshelf.records = response.records; }) ; 
	}

	function bookCtrl($http, $routeParams) {
		var book = this;
		book.id = parseInt($routeParams.id) ;

		$http.get("js/bookshelf.json")
		.success(function(response) {
			for(var i in response.records) {
				if (response.records[i].id === book.id)
				{
					book.location = response.records[i].location ;
					break;
				}
			}
			$http.get(book.location +"/list")
			.success(function(response) {
				book.images = response.split("\n") ;
				book.images.length = book.images.length -1;
				book.current = book.images[0];
			}) ;
		}) ; 

		book.changeMe = function(elm) {
			book.current = elm.img;
		};
	}

	app.controller('bookshelfCtrl',["$http", bookshelfCtrl]);
	app.controller('bookCtrl', ["$http", "$routeParams", bookCtrl]);
})() ;
