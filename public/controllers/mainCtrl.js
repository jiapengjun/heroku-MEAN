(function() {
  "use strict";

  var app = angular.module('myApp')

  function mainCtrl($scope, $http) {
    $scope.fmail= 'jiapengjun'
    $scope.lmail= 'gmail.com'

    $http.get("assets/data/main.json").success(function(response) {
      $scope.local= response.local; 
      $scope.drive = response.drive; 
      $scope.utube = response.utube; 
      console.log($scope);
    }) ;
  }

  app.controller('mainCtrl',  ["$scope", "$http", mainCtrl]);
})() ;
