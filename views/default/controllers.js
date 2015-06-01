var phonecatApp = angular.module('phonecatApp', []
  //  ,function ($interpolateProvider){ $interpolateProvider.startSymbol('<{'); $interpolateProvider.endSymbol('}>'); });
);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
  $http.get("<?=URL('static','phones/phones.json')?>").success(function(data) {
    $scope.phones = data;
    //$scope.phones = data.splice(0, 5);
  });
  console.log($scope.phones);
  $scope.name='World';
  $scope.orderProp = 'age';
}]);
