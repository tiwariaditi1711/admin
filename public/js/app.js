'use strict';


var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

require('../css/app.css');

require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController'
  })
  .when('/cancellation', {
    templateUrl: 'views/cancellation.html',
    controller: 'CancellationController'
  })
  .when('/movie', {
    templateUrl: 'views/movie.html',
    controller: 'MovieController'
  })
  .when('/theatre', {
    templateUrl: 'views/theatre.html',
    controller: 'TheatreController'
  })
  .when('/mapping', {
    templateUrl: 'views/mapping.html',
    controller: 'HomeController'
  })
 
  .otherwise({
    redirectTo: '/home',
  });
});
