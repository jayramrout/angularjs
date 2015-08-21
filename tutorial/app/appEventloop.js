var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
myApp.controller('mainController', ['$scope','$log', '$timeout','$filter',function($scope, $log, $timeout,$filter) {
    $log.info($scope);
    $scope.name = 'Jayram';
    $scope.handle = '';
    $scope.lowercasehandle = function (){
        return $scope.handle.toLocaleLowerCase();//$filter('lowercase')($scope.handle);
    };
    $scope.characters = 5;

    $scope.rules = [
        {rulename:"You there"},{rulename:"I am here"},{rulename:"I am AngularJS"}
    ];

    $scope.alertClick = function(){
      alert("Clicked!");
    };

/*
    $scope.$watch('handle',function(newValue,oldValue){
        console.info('Changed');
        console.log('Old :' + oldValue);
        console.log('New :' + newValue);
    });

    setTimeout(function(){
        $scope.$apply(function(){
            $scope.handle = 'newtwitterhandle';
            console.log('Scope Changed!');
        });
    },3000);
*/

}]);
