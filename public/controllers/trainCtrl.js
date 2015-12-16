(function() {
  "use strict";

  var app = angular.module('myApp');

  function trainCtrl($scope, $http) {
    $scope.order = {
        name: 'technique',
        descending: false
    }

    $scope.setOrder = function(name) {
        var order = $scope.order ;

        if (name == order.name) {
            order.descending = !order.descending ;
        } else {
            order.name = name ;
            order.descending = false ;
        }
    }

    $http.get("assets/data/train.json").success(function(response) {
      $scope.github= response.records; }) ;
  }

  app.controller('trainCtrl', ["$scope", "$http", trainCtrl]);
})() ;
