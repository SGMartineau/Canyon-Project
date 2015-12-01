angular.module('canyon').controller('zoneCtrl', function($scope, $stateParams) {
    console.log($stateParams.zone);
    
    $scope.zoneName = $stateParams.zone;
    
});