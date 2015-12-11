(function() {
  "use strict";

  var app = angular.module('myApp');

  function trainCtrl($scope, $http) {
    $scope.fmail= 'jiapengjun'
    $scope.lmail= 'gmail.com'

    $http.get("assets/data/train.json").success(function(response) {
      $scope.github= response.records; }) ;
  }

  app.controller('trainCtrl', ["$scope", "$http", trainCtrl]);
})() ;
