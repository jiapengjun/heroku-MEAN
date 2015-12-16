(function() {
  'use strict';

  var app = angular.module('myApp');

  function feedbackCtrl($scope, $http) {
    $scope.result = ''
    $scope.submit = function() {
        var data = {
            'name': $scope.name,
            'email': $scope.email,
            'comment': $scope.comment
        }

        $http.post('/feedback', data).success(function(response) {
            $scope.result = response

            $scope.name = ''
            $scope.email = ''
            $scope.comment = ''
        })
    }
  }

  app.controller('feedbackCtrl', ['$scope', '$http', feedbackCtrl]);
})() ;
