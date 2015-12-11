(function() {
  "use strict";

  var app = angular.module('my-routes', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainCtrl',
    })

    .when('/video', {
      templateUrl: 'views/video.html',
      controller: 'videoCtrl',
    })

    .when('/train', {
      templateUrl: 'views/train.html',
      controller: 'trainCtrl',
    })

    .when('/resume', {
      templateUrl: 'views/resume.html',
    })
    .otherwise({redirectTo: '/'});
  });
  
})() ;
