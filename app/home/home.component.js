'use strict';

angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['Home',
      function HomeController(Home) {
        this.message = 'Hello Angular!';
      }
    ]
  });
