var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
myApp.controller('mainController', ['$scope','$log', '$timeout','$filter',function($scope, $log, $timeout,$filter) {
    $log.info($scope);
    $scope.name = 'Jayram';
    $scope.handle = '';
    $scope.lowercasehandle = function (){
        return $scope.handle.toLocaleLowerCase();//$filter('lowercase')($scope.handle);
    };
    $scope.characters = 5;

    var rulesRequest = new XMLHttpRequest();
    rulesRequest.onreadystatechange = function(){
        $scope.$apply(function(){
            if(rulesRequest.readyState == 4 && rulesRequest.status == 200) {
                //$scope.rules = rulesRequest.responseText;
                //JSON.parse(rulesRequest.responseText);
            }
        });
    }
    rulesRequest.open("GET","http://localhost:8080/webapp/helloWorld",true);
    rulesRequest.send();

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
