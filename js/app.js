var myApp = angular.module('myApp', ['ngRoute']);
// config route provider
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
    })
   .when('/content/', {
      templateUrl: 'templates/content.html',
      controller: 'ContentController',
    })
   .when('/about/', {
      templateUrl: 'templates/about.html',
      controller: 'AboutController',
    })
    .when('/technical/', {
      templateUrl: 'templates/technical.html',
      controller: 'TechnicalController',
    })
    .when('/soon/', {
      templateUrl: 'templates/soon.html',
      controller: 'SoonController',
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
  $(function(){ /* to make sure the script runs after page load */

  $('.item').each(function(event){ /* select all divs with the item class */
  
    var max_length = 200; /* set the max content length before a read more link will be added */
    
    if($(this).html().length > max_length){ /* check for content length */
      
      var short_content   = $(this).html().substr(0,max_length); /* split the content in two parts */
      var long_content  = $(this).html().substr(max_length);
      
      $(this).html(short_content+
             '<a href="#" class="read_more"><br/>... Read More</a>'+
             '<span class="more_text" style="display:none;">'+long_content+'</span>'); /* Alter the html to allow the read more functionality */
             
      $(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide(); /* hide the read more button */
        $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */
     
      });
      
    }
    
  });
 
 
});
})
.controller('SoonController', function($scope){
  $scope.about = "Here's some information about this page."
})