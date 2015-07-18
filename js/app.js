var myApp = angular.module('myApp', ['ngRoute']);
// config route provider
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'LandingController',
    })
   .when('/content/', {
    	templateUrl: 'templates/content.html',
   	 	controller: 'ContentController',
  	})
   .when('/technical/', {
    	templateUrl: 'templates/technical.html',
    	controller: 'TechnicalController',
  	})
   .when('/about/', {
      templateUrl: 'templates/about.html',
      controller: 'AboutController',
    })
})
   // Landing page controller
.controller('LandingController', function($scope){
  $scope.number = 20
})

// About page controller
.controller('AboutController', function($scope){
  $scope.about = "Here's some information about this page."
})

// Content controller
.controller('ContentController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})
.controller('TechnicalController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})