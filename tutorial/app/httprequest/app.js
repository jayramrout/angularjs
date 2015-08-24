var myApp = angular.module('myApp', []);
/*myApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);*/
myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;
    $http.get('http://localhost:8080/webapp/helloWorld')
        .success(function (result) {
            $scope.serverDate = result;
        })
        .error(function (data, status) {
            console.log(data);
        });
    /*$scope.newRule = '';
    $scope.addRule = function () {
        $http.post('helloWorld', { "ONE": "Buddy" })
            .success(function (result) {
            console.log(result);
                $scope.rules = result;
                $scope.newRule = '';
            }).error(function (data, status) {
                console.log(data);
            });
    };*/
}]);