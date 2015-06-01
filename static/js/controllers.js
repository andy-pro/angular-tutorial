/* Controllers */

var phonecatApp = angular.module('phonecatApp', []
  //  ,function ($interpolateProvider){ $interpolateProvider.startSymbol('<{'); $interpolateProvider.endSymbol('}>'); });
);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
  $http.get("/PhoneCat/default/ajax_getPhones").success(function(data) {
    $scope.phones = data;
    //$scope.phones = data.splice(0, 5);
    //console.log(data);
  });
  $scope.name='World';
  $scope.orderProp = 'age';
}]);

