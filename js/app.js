var closeModal = function(modalName) {
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $(modalName).modal('hide');
};

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
    .otherwise({
      redirectTo: '/'
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

// Technical controller
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
 
})

// Soon Controller
.controller('SoonController', function($scope){
  $scope.about = "Here's some information about this page."
})
        // SHAMELESSLY COPIED AND PASTED FROM
        // www.bennadel.com/blog/2869-using-anchor-tags-and-url-fragment-links-in-angularjs.htm

        // I watch the ngAnchor attribute to automatically configure the HREF value to
        // use natural URL-fragment behavior in AngularJS.
        // --
        // NOTE: We don't actually need the $anchorScroll() service; but, we need to
        // inject it here in order to guarantee that it is instantiated and starts
        // watching the $location for changes.

// Controller for not breaking anchor tags
.controller('AppController',
    function AppController( $scope, $location, $route ) {
        var vm = this;
        vm.currentUrl = "";
        // When the location changes, capture the state of the full URL.
        $scope.$on(
            "$locationChangeSuccess",
            function locationChanged() {
                vm.currentUrl = $location.url();
            }
        );
    }
)

.directive(
    "ngAnchor",
    function anchorDirective( $location, $anchorScroll ) {
        // Return the directive configuration object.
        return({
            link: link,
            restrict: "A"
        });
        // I bind the JavaScript events to the view-model.
        function link( scope, element, attributes ) {
            // Whenever the attribute changes, we have to update our HREF state
            // to incorporate the new ngAnchor value as the embedded fragment.
            attributes.$observe( "ngAnchor", configureHref );
            // Whenever the the location changes, we want to update the HREF value
            // of this link to incorporate the current URL plus the URL-fragment
            // that we are watching in the ngAnchor attribute.
            scope.$on( "$locationChangeSuccess", configureHref );
            // I update the HREF attribute to incorporate both the current top-
            // level fragment plus our in-page URL-fragment intent.
            function configureHref() {
                var fragment = ( attributes.ngAnchor || "" );
                // Strip off the leading # to make the string concatenation
                // handle variable-state inputs (ie, ones that may or may not
                // include the leading pound sign).
                if ( fragment.charAt( 0 ) === "#" ) {
                    fragment = fragment.slice( 1 );
                }
                // Since the anchor is really the fragment INSIDE the fragment,
                // we have to build two levels of fragment.
                var routeValue = ( "#" + $location.url().split( "#" ).shift() );
                var fragmentValue = ( "#" + fragment );
                attributes.$set( "href", ( routeValue + fragmentValue ) );
            }
        }
    }
)