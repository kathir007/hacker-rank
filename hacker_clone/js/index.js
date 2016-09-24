var app = angular.module('AngularApp', ['ngRoute','ngMaterial']);

app
.config(function($routeProvider, $mdThemingProvider) {
  $routeProvider
    .when('/home', {
      template: '<h1>HOME</h1>'
    })
    .when('/choose_it', {
    	template: '<div>Choose it</div>'
    })
    .when('/one_word', {
    	templateUrl: '../temp/pages/one_word.html'
    })
    .when('/programming', {
    	template: '<div>Programming</div>'
    })
    .otherwise({
      redirectTo: '/home'
    })

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('yellow');
});



app
  .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
  };
 
}]);