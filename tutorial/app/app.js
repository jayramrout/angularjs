var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
/*

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    $log.info($scope);
});

*/
myApp.controller('mainController', ['$scope','$log', '$timeout','$filter',function($scope, $log, $timeout,$filter) {
    $log.info($scope);
    $scope.name = "Jayram";
    $scope.lowercasehandle = function (){
        return $scope.handle.toLocaleLowerCase();//$filter('lowercase')($scope.handle);
    };
    $scope.handle = '';
    $timeout(function(){
        $scope.name = "Tanushree";
    },3000);
}]);