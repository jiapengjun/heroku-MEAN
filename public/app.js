(function() {
  "use strict";

  var app = angular.module('myApp', ['my-routes']);

  app.config(function($compileProvider){ 
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|magnet|javascript):/);
})

})() ;
