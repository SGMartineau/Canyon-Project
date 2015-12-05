angular.module('canyon').controller('newZoneCtrl', function($scope, $http, newZoneService) {
    
    $scope.addZone = function () {
        newZoneService.addZone($scope.zoneData);
        $scope.zoneData = {};
    }
    
});