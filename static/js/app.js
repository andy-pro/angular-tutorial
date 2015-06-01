var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]
//  ,function ($interpolateProvider){ $interpolateProvider.startSymbol('<{'); $interpolateProvider.endSymbol('}>'); });
);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: '/PhoneCat/static/templates/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: '/PhoneCat/static/templates/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);