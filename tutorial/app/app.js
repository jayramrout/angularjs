var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
/*

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    
    $log.info($scope);
    
});

*/
myApp.controller('mainController', ['$scope','$log',function(a, b) {
    b.info(a);
}]);