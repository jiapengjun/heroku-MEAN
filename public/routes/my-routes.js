(function() {
  "use strict";

  var app = angular.module('my-routes', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'indexCtrl',
    })

    .when('/video', {
      templateUrl: 'views/video.html',
      controller: 'videoCtrl',
    })

    .when('/train', {
      templateUrl: 'views/train.html',
      controller: 'trainCtrl',
    })

    .when('/misc', {
      templateUrl: 'views/misc.html',
      controller: 'miscCtrl',
    })

    .when('/feedback', {
      templateUrl: 'views/feedback.html',
      controller: 'feedbackCtrl',
    })

    .when('/history', {
      templateUrl: 'views/history.html',
    })

    .when('/resume', {
      templateUrl: 'views/resume.html',
    })

    .otherwise({redirectTo: '/'});
  });
  
})() ;
