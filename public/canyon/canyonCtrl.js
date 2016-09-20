angular.module('canyon').controller('canyonCtrl', function($scope, $stateParams, canyonResolve) {

    $scope.canyon = canyonResolve;
    
    $scope.worked = function () {
        console.log($scope.canyon);
    }
    
    $scope.worked();
    
});