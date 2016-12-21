'use strict';

angular.module('home')

  // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider.when('/home', {
  //     template : '<home></home>'
  //   });
  // }])

  // .controller('HomeController', [function () {
  //   var self = this;
  //   self.message = 'Hello Angular!';
  //   console.log(self.message);
  // }])

  .component('home', {
    templateUrl : 'home/home.template.html',
    controller : ['$routeParams', 'Home', HomeController]
  })

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      template : '<home></home>'
    });
  }]);

function HomeController(Home) {
  var self = this;
  self.message = 'Hello Angular!';
}
