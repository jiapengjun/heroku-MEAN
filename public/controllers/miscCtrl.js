(function() {
  "use strict";

  var app = angular.module('myApp')

  function miscCtrl($scope, $http) {

    $http.get("assets/data/misc.json").success(function(response) {
      $scope.local= response.local; 
      $scope.drive = response.drive; 
      $scope.utube = response.utube; 
    }) ;
  }

  app.controller('miscCtrl',  ["$scope", "$http", miscCtrl]);
})() ;
