angular.module('canyon').controller('zoneCtrl', function($scope, $stateParams, zoneService, $http) {
    $scope.oneCanyon = function() {
        $http.get('/api/zone-1?_id=' + $stateParams.zoneId).then(function (response) {
             $scope.oneZone = response.data;
        });
    };
    
    $scope.oneCanyon();
    
    $scope.canyonsForZone = function() {
        $http.get('/api/canyon-2?zoneId=' + $stateParams.zoneId).then(function (response) {
            $scope.canyones = response.data;
        });
    };
    
    $scope.canyonsForZone();
    
    $scope.editForm = false;
    $scope.buttonShow = true;
    
    $scope.zoneName = $stateParams.zone;
    
    $scope.showForm = function() {
        $scope.editForm = true;
        $scope.buttonShow = false;
    }
    
    $scope.alterZone = function () {
        zoneService.editZone($scope.oneZone);
        $scope.editForm = false;
        $scope.buttonShow = true;
    }
    
    
});