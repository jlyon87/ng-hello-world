'use strict';

angular.
  module('home')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home'. {
      templateUrl : 'home/home.template.html',
      controller : 'HomeController'
    });
  }])

  .component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['HomeController',
      function HomeController(Home) {
        this.message = 'Hello Angular!';
      }
    ]
  });
