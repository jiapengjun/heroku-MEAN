(function() {
  "use strict";

  var app = angular.module('myApp')

  function indexCtrl() {

      $('.carousel').carousel({
                interval: 8000
              })
  }

  app.controller('indexCtrl',  [indexCtrl]);
})() ;
