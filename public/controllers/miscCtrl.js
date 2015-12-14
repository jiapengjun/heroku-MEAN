(function() {
  "use strict";

  var app = angular.module('myApp')

  function miscCtrl($scope, $http) {
    $scope.fmail= 'jiapengjun'
    $scope.lmail= 'gmail.com'

    $http.get("assets/data/misc.json").success(function(response) {
      $scope.local= response.local; 
      $scope.drive = response.drive; 
      $scope.utube = response.utube; 
      console.log($scope);
    }) ;
  }

  app.controller('miscCtrl',  ["$scope", "$http", miscCtrl]);
})() ;
