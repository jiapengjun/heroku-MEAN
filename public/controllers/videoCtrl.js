(function() {
  "use strict";

  var app = angular.module('myApp') 

  function videoCtrl($scope, $http) {
    $http.get("assets/data/seed_drama.json").success(function(response) {
      $scope.dramas = response.records; }) ;

    $http.get("assets/data/seed_movie.json").success(function(response) {
      $scope.movies = response.records; }) ;

    $http.get("assets/data/seed_anime.json").success(function(response) {
      $scope.animes = response.records; }) ;

    $http.get("assets/data/seed_docum.json").success(function(response) {
      $scope.docums = response.records; }) ;
  }

  app.controller('videoCtrl', ["$scope", "$http", videoCtrl]);
})() ;
